import "./LoadingDots.css";

interface Props {}

export function LoadingDots(props: Props) {
  return (
    <span className="rem-loading-dots">
      <span className="rem-loading-dot"></span>
      <span className="rem-loading-dot"></span>
      <span className="rem-loading-dot"></span>
    </span>
  );
}
