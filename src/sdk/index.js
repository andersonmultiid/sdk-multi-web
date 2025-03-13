import r2wc from "@r2wc/react-to-web-component";
import { MultiIdCapture } from "./Multi";

const MultiIdCaptureWC = r2wc(MultiIdCapture, {
  props: {
    secret: "string",
    user: "string",
  },
});

if (customElements.get('multi-id-capture')) {
  customElements.delete('multi-id-capture');
}

customElements.define('multi-id-capture', MultiIdCaptureWC);
