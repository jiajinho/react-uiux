import { CSSProperties } from "react";
import { ButtonType } from "./types";

export function getStyle(type: ButtonType): CSSProperties {
  let background = "";
  let color = "";
  let borderColor = "";

  switch (type) {
    case "primary":
      background = "var(--primary-color)";
      color = "white";
      borderColor = background;
      break;
    case "default":
      background = "#fff0";
      color = "black";
      borderColor = "#777";
      break;
    case "link":
      background = "#fff0";
      color = "var(--primary-color)";
      borderColor = background;
      break;
    case "danger":
      background = "var(--error-color)";
      color = "white";
      borderColor = background;
  }

  return { background, color, borderColor };
}
