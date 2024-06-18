import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WasteCollectionServiceService } from "./wasteCollectionService.service";
import { WasteCollectionServiceControllerBase } from "./base/wasteCollectionService.controller.base";

@swagger.ApiTags("wasteCollectionServices")
@common.Controller("wasteCollectionServices")
export class WasteCollectionServiceController extends WasteCollectionServiceControllerBase {
  constructor(protected readonly service: WasteCollectionServiceService) {
    super(service);
  }
}
