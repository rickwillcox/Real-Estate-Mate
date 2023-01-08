import "./LoadingDots.css";

interface Props {
  nameClass?: string;
  removeWhen?: boolean;
}

export function LoadingDots(props: Props) {
  const { nameClass = "", removeWhen } = props;

  if (!!nameClass && removeWhen) {
    document.querySelectorAll(`.${nameClass}`).forEach((element) => {
      element.remove();
    });
  }

  return (
    <span className={`rem-loading-dots ${nameClass}`}>
      <span className={`rem-loading-dot ${nameClass}`}></span>
      <span className={`rem-loading-dot ${nameClass}`}></span>
      <span className={`rem-loading-dot ${nameClass}`}></span>
    </span>
  );
}
