import { RecyclingTrackerWhereInput } from "./RecyclingTrackerWhereInput";
import { RecyclingTrackerOrderByInput } from "./RecyclingTrackerOrderByInput";

export type RecyclingTrackerFindManyArgs = {
  where?: RecyclingTrackerWhereInput;
  orderBy?: Array<RecyclingTrackerOrderByInput>;
  skip?: number;
  take?: number;
};
