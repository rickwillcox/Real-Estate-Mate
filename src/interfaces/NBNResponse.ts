import { Nullable } from ".";

export interface NBNResponse {
  countryCode?: Nullable<string>;
  street?: Nullable<string>;
  suburb?: Nullable<string>;
  state?: Nullable<string>;
  postcode?: Nullable<string>;
  town?: Nullable<string>;
  locationId?: Nullable<string>;
  technology?: Nullable<string>;
  class?: Nullable<string>;
  provider?: Nullable<string>;
  speed?: Nullable<number>;
  primaryAccessTechnology?: Nullable<string>;
  alternativeTechnology?: Nullable<string>;
  upperSpeed?: Nullable<number>;
  lowerSpeed?: Nullable<number>;
  networkCoexistence?: Nullable<string>;
  csaId?: Nullable<string>;
  isPromotionalArea?: Nullable<boolean>;
  NewDevelopmentsChargeApplies?: Nullable<string>;
  cntActivePort?: Nullable<number>;
  cntInactivePort?: Nullable<number>;
}
