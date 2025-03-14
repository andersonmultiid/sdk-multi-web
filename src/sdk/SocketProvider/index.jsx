import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);
  const id = uuidv4();

  useEffect(() => {
    const socketConnection = io(
      "https://service-capture-437894375097.us-central1.run.app/",
      { autoConnect: true }
    );

    setSocket(socketConnection);

    socketConnection.on("connect", () => {
      setOnline(true);
    });

    socketConnection.on("message", () => {
      setOnline(false);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const customEventEmit = useCallback(
    ({ type, data }) => {
      let response = {};

      if (type === "success") {
        response = {
          type: "success",
          message: "The image capture was successful.",
          ...data,
        };
        window.dispatchEvent(
          new CustomEvent("multi-event", { detail: { response } })
        );
      }

      if (type === "finish") {
        response = {
          type: "finish",
        };
        window.dispatchEvent(
          new CustomEvent("multi-event", { detail: { response } })
        );
      }

      if (type === "close") {
        response = {
          type: "close",
        };
        window.dispatchEvent(
          new CustomEvent("multi-event", { detail: { response } })
        );
      }

      if (type === "timeout") {
        response = {
          type: "timeout",
        };
        window.dispatchEvent(
          new CustomEvent("multi-event", { detail: { response } })
        );
      }
    },
    []
  );

  useEffect(() => {
    if (online) {
      socket.on("message", (data) => {
        const response = {
          id: data.end2end_id,
          base64: data.image.base64,
        };

        customEventEmit({ type: "success", data: response });
      });

      return () => {
        socket.off("message");
      };
    }
  }, [online]);

  return (
    <SocketContext.Provider value={{ online, id, customEventEmit }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketContextProvider");
  }

  return context;
};
