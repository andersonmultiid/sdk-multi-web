import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);
  const id = uuidv4();

  useEffect(() => {
    const url = URL_SOCKET_WEB;

    const socketConnection = io(url, { autoConnect: true });

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

  return (
    <SocketContext.Provider value={{ online, id, socket }}>
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
