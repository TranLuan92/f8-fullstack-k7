import { rowContainer, overlay } from "./variables.js";
export function showAndHiddenForm() {
  rowContainer.classList.replace("close", "open");
  overlay.classList.replace("close", "open");
}
