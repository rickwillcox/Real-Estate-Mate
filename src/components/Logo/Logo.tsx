import { getChromeUrl } from "@src/utils";
import "./logo.scss";

export function Logo() {
  const realEstateMateLogoPath = "src/assets/logo-128.png";
  return (
    <img
      className="rem-logo"
      src={`${getChromeUrl(realEstateMateLogoPath)}`}
      alt="logo"
      height={50}
      width={50}
    />
  );
}
