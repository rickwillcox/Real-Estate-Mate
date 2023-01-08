import { getChromeUrl } from "@src/utils";
import "./logo.scss";
import { useLoadedStore } from "@src/stores";

export function Logo() {
  const { allContainersLoaded } = useLoadedStore();
  const realEstateMateLogoPath = "src/assets/logo-128.png";

  const spinLogo = allContainersLoaded ? "spin-once" : "";
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
