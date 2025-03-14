import { useEffect } from "react";

export const CaptureComponent = (props) => {
  useEffect(() => {
    if (window && document) {
      const existScript = document.getElementById("GoSaffeCaptureComponent");
      if (!existScript) {
        const script = document.createElement("script");
        script.id = "GoSaffeCaptureComponent";
        const body = document.getElementsByTagName("body")[0];
        script.src = "https://go.saffe.ai/cdn/latest";
        body.appendChild(script);
        script.addEventListener("load", () => {
          window.GoSaffe.init(
            props.captureKey,
            props.user,
            props.endToEndId,
            props.type
          );
        });
      }
    }
    return () => {
      const script = document.getElementById("GoSaffeCaptureComponent");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return <div />;
};
