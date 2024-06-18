import { WasteCollectionSchedule as TWasteCollectionSchedule } from "../api/wasteCollectionSchedule/WasteCollectionSchedule";

export const WASTECOLLECTIONSCHEDULE_TITLE_FIELD = "id";

export const WasteCollectionScheduleTitle = (
  record: TWasteCollectionSchedule
): string => {
  return record.id?.toString() || String(record.id);
};
