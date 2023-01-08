import { useEffect, useState } from "react";

interface Props {
  initialValue?: boolean;
}
/**
 * @default initialValue = false
 * @returns [value, toggle]
 * @example
 * const [value, toggle] = useToggle({ initialValue: true });
 **/
export function useToggle(props: Props): [boolean, () => void] {
  const { initialValue = false } = props;
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, []);

  function toggle() {
    setValue((prev) => !prev);
  }

  return [value, toggle];
}
