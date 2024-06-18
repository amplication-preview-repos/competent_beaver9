import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WasteCollectionScheduleService } from "./wasteCollectionSchedule.service";
import { WasteCollectionScheduleControllerBase } from "./base/wasteCollectionSchedule.controller.base";

@swagger.ApiTags("wasteCollectionSchedules")
@common.Controller("wasteCollectionSchedules")
export class WasteCollectionScheduleController extends WasteCollectionScheduleControllerBase {
  constructor(protected readonly service: WasteCollectionScheduleService) {
    super(service);
  }
}
