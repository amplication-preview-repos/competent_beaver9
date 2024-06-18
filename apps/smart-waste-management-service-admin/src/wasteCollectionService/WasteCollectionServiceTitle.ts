import { WasteCollectionService as TWasteCollectionService } from "../api/wasteCollectionService/WasteCollectionService";

export const WASTECOLLECTIONSERVICE_TITLE_FIELD = "id";

export const WasteCollectionServiceTitle = (
  record: TWasteCollectionService
): string => {
  return record.id?.toString() || String(record.id);
};
