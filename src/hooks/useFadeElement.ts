import { useState } from "react";

interface Props {
  type: "in" | "out";
  fadeWhen: boolean;
}

export function useFadeElement(props: Props) {
  const { type, fadeWhen } = props;

  const beforeFadeClass = type === "in" ? "rem-fade-in-element" : "";
  const afterFadeClass =
    type === "in" ? "rem-fade-in-element visible" : "rem-fade-out-element";

  return fadeWhen ? afterFadeClass : beforeFadeClass;
}
