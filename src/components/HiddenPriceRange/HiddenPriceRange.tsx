import { useHiddenPriceRange } from "@src/hooks";
import "./hiddenPriceRange.css";

export function HiddenPriceRange() {
  const {
    data: { priceRange },
    loading,
  } = useHiddenPriceRange();
  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Price Range:{" "}
        <span className="rem-sub-title-value-text">{priceRange}</span>
      </h6>
    </div>
  );
}
