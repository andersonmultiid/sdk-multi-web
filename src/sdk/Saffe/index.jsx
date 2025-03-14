import { useCallback, useEffect } from "react";
import { CaptureComponent } from "./component";
import { useSocket } from "../SocketProvider";

const SaffeCapture = ({ secret, user }) => {
  const { online, id, socket } = useSocket();

  const customEventEmit = useCallback(({ type, data }) => {
    let response = {};

    if (type === "success") {
      response = {
        type: "success",
        message: "The image capture was successful.",
        ...data,
      };
      window.dispatchEvent(
        new CustomEvent("multi-event", { detail: { ...response } })
      );
    }

    if (type === "finish") {
      response = {
        type: "finish",
      };
      window.dispatchEvent(
        new CustomEvent("multi-event", { detail: { ...response } })
      );
    }

    if (type === "close") {
      response = {
        type: "close",
      };
      window.dispatchEvent(
        new CustomEvent("multi-event", { detail: { ...response } })
      );
    }

    if (type === "timeout") {
      response = {
        type: "timeout",
      };
      window.dispatchEvent(
        new CustomEvent("multi-event", { detail: { ...response } })
      );
    }
  }, []);

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
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

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
