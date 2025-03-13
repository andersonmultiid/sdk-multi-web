import r2wc from "@r2wc/react-to-web-component";
import { MultiIdCapture } from "./Multi";

const MultiIdCaptureWC = r2wc(MultiIdCapture, {
  props: {
    secret: "string",
    user: "string",
  },
});

customElements.define("multi-id-capture", MultiIdCaptureWC);
