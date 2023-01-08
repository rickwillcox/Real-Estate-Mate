import { useState } from "react";

interface Props {
  qualifier: boolean;
}

export function useFadeIn(props: Props) {
  const { qualifier } = props;

  const beforeFadeClass = "rem-fade-in-element";
  const afterFadeClass = `${beforeFadeClass} visible`;

  return qualifier ? afterFadeClass : beforeFadeClass;
}
