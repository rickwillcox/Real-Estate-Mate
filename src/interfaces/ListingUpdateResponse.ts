export interface ListingUpdate {
  updatedField: string;
  updatedValue: string;
  lastValue?: string;
  lastCreatedDate?: string;
  createdDate: string;
  createdTime: string;
}

export interface ListingUpdatesResponse {
  [key: string]: ListingUpdate[];
}
