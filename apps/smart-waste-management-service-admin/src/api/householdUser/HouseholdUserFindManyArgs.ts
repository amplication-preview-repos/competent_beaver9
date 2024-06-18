import { HouseholdUserWhereInput } from "./HouseholdUserWhereInput";
import { HouseholdUserOrderByInput } from "./HouseholdUserOrderByInput";

export type HouseholdUserFindManyArgs = {
  where?: HouseholdUserWhereInput;
  orderBy?: Array<HouseholdUserOrderByInput>;
  skip?: number;
  take?: number;
};
