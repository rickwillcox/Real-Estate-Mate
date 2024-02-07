import { getChromeUrl } from "@src/utils";
import "./logo.scss";

export function Logo() {
  const realEstateMateLogoPath = "src/assets/logo-128.png";

  // const spinLogo = allContainersLoaded ? "spin-once" : "";
  const spinLogo = "spin-once";
  return (
    <img
      className={`rem-logo ${spinLogo}`}
      src={`${getChromeUrl(realEstateMateLogoPath)}`}
      alt="logo"
      height={50}
      width={50}
    />
  );
}
