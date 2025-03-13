import { GoSaffeCapture } from "@go.saffe/go-saffe-react-js";
import { useSocket } from "../SocketProvider";

const SaffeCapture = ({ secret, user }) => {
  const { online, id, customEventEmit } = useSocket();

  return (
    <>
      {online && (
        <GoSaffeCapture
          captureKey={secret}
          endToEndId={id}
          type="verification"
          user={user}
          onClose={() => customEventEmit({ type: "close" })}
          onFinish={() => customEventEmit({ type: "finish" })}
          onTimeout={() => customEventEmit({ type: "timeout" })}
        />
      )}
    </>
  );
};

export { SaffeCapture };
