import { useCallback, useEffect } from "react";
import { CaptureComponent } from "./component";
import { useSocket } from "../SocketProvider";

const SaffeCapture = ({ secret, user }) => {
  const { online, id, customEventEmit } = useSocket();

  const handleMessage = useCallback((e) => {
    if (e.data.source === "go-saffe-capture") {
      switch (e.data.payload.event) {
        case "close":
          return customEventEmit({ type: "close" });
        case "finish":
          return customEventEmit({ type: "finish" });
        case "timeout":
          return customEventEmit({ type: "timeout" });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message",handleMessage);
    };
  }, [handleMessage]);

  return (
    <>
      {online && (
        <CaptureComponent
          captureKey={secret}
          endToEndId={id}
          type={"verification"}
          user={user}
        />
      )}
    </>
  );
};

export { SaffeCapture };
