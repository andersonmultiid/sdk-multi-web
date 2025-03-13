import { SaffeCapture } from "../Saffe";
import { SocketContextProvider } from "../SocketProvider";

const MultiIdCapture = ({ secret, user }) => {
  return (
    <SocketContextProvider>
      <SaffeCapture
        secret={secret}
        user={user}
      />
    </SocketContextProvider>
  );
};

export { MultiIdCapture };
