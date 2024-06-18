import { WasteCollectionServiceWhereInput } from "./WasteCollectionServiceWhereInput";
import { WasteCollectionServiceOrderByInput } from "./WasteCollectionServiceOrderByInput";

export type WasteCollectionServiceFindManyArgs = {
  where?: WasteCollectionServiceWhereInput;
  orderBy?: Array<WasteCollectionServiceOrderByInput>;
  skip?: number;
  take?: number;
};
