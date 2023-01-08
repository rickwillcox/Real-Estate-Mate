import {
  coExistanceLink,
  useFadeElement,
  useFadeIn,
  useNBNData,
} from "@src/hooks";
import "./NBNInfo.scss";
import "../../consts/styles/styles.scss";
import { LoadingDots } from "../LoadingDots";

export function NBNInfo() {
  const {
    data: {
      primaryAccessTechnology,
      primaryAccessTechnologyLink,
      networkCoexistence,
      speedCategory,
      speedText,
    },
    loading,
  } = useNBNData();

  const coExistanceText = networkCoexistence ? "Yes" : "No";
  const coExistanceSmileyText = networkCoexistence ? ":(" : ":)";
  const coExistanceTextColor = networkCoexistence ? "red" : "green";

  const nbnDataReceived = speedText;

  const showNBNInfoList = !!(!loading && nbnDataReceived);

  const fadeInNBNList = useFadeElement({
    type: "in",
    fadeWhen: showNBNInfoList,
  });

  const fadeInNA = useFadeElement({
    type: "in",
    fadeWhen: !loading && !nbnDataReceived,
  });

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Internet:{" "}
        <LoadingDots nameClass="rem-loading-nbn-info" removeWhen={!loading} />
        <span className={`rem-sub-title-value-text ${fadeInNA}`}>
          {!nbnDataReceived ? "N/A" : ""}
        </span>
      </h6>
      <ul className={`rem-nbn-info-list ${fadeInNBNList}`}>
        <li>
          <h6 className="rem-sub-title">
            Speed:{" "}
            <span
              className={`rem-sub-title-value-text rem-nbn-info-list-speed ${speedCategory}`}
            >
              {speedText}
            </span>
          </h6>
        </li>
        <li>
          <h6 className="rem-sub-title">
            Connection:{" "}
            <a
              className="rem-sub-title-value-text rem-link"
              target="blank"
              href={primaryAccessTechnologyLink}
            >
              {primaryAccessTechnology}
            </a>
          </h6>
        </li>
        <li>
          <h6 className="rem-sub-title">
            Co-Existance:{" "}
            <a
              className={`rem-sub-title-value-text rem-link   ${coExistanceTextColor}`}
              target="blank"
              href={coExistanceLink}
            >
              {coExistanceText}
            </a>
            <span className="rem-sub-title-value-text">
              {" "}
              {coExistanceSmileyText}
            </span>
          </h6>
        </li>
      </ul>
    </div>
  );
}
