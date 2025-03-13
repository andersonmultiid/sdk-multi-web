import { io } from "socket.io-client";
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4} from "uuid"

const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);
  const id = uuidv4()

  useEffect(() => {
    const socketConnection = io(
      "https://service-capture-437894375097.us-central1.run.app",
      { autoConnect: true }
    );

    setSocket(socketConnection);

    socketConnection.on("connect", () => {
      console.log("Conectado ao servidor Socket.IO");
      setOnline(true);
    });

    socketConnection.on("message", (data) => {
      console.log("Mensagem recebida do servidor:", data);
      setOnline(false);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  useEffect(() => {
    if (online) {
      socket.on("message", (data) => {
        const event = new CustomEvent("base64", {
          detail: { event: data },
          cancelable: true,
          bubbles: true,
        });

        window.dispatchEvent(event);
      });
    }
  }, [online]);

  return (
    <SocketContext.Provider value={{ online,id }}>
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
