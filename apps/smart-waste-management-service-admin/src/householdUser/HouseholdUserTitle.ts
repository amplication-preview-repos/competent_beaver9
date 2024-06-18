import { HouseholdUser as THouseholdUser } from "../api/householdUser/HouseholdUser";

export const HOUSEHOLDUSER_TITLE_FIELD = "id";

export const HouseholdUserTitle = (record: THouseholdUser): string => {
  return record.id?.toString() || String(record.id);
};
