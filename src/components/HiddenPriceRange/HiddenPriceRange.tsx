import { useFadeIn, useHiddenPriceRange } from "@src/hooks";
import "./hiddenPriceRange.css";
import { LoadingDots } from "../LoadingDots";

export function HiddenPriceRange() {
  const {
    data: { priceRange },
    loading,
  } = useHiddenPriceRange();
  const fadeInClass = useFadeIn({ qualifier: !loading && !!priceRange });

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Price Range:{" "}
        <LoadingDots
          nameClass="rem-loading-hidden-price-range"
          removeWhen={!loading}
        />
        <span className={`rem-sub-title-value-text ${fadeInClass}`}>
          {priceRange}
        </span>
      </h6>
    </div>
  );
}
