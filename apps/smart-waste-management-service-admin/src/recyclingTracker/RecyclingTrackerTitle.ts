import { RecyclingTracker as TRecyclingTracker } from "../api/recyclingTracker/RecyclingTracker";

export const RECYCLINGTRACKER_TITLE_FIELD = "id";

export const RecyclingTrackerTitle = (record: TRecyclingTracker): string => {
  return record.id?.toString() || String(record.id);
};
