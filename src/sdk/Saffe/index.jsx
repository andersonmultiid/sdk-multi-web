import { GoSaffeCapture } from "@go.saffe/go-saffe-react-js";
import { useSocket } from "../SocketProvider";

const SaffeCapture = ({ secret, user }) => {
  const { online, id } = useSocket();

  return (
    <>
      {online && (
        <GoSaffeCapture
          captureKey={secret}
          endToEndId={id}
          type="verification"
          user={user}
          onClose={() => console.log("Fechou")}
          onFinish={() => console.log("Fim")}
          onTimeout={() => console.log("Demorou")}
        />
      )}
    </>
  );
};

export { SaffeCapture };
