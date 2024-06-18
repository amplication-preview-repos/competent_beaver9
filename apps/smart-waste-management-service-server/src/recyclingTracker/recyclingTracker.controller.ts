import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecyclingTrackerService } from "./recyclingTracker.service";
import { RecyclingTrackerControllerBase } from "./base/recyclingTracker.controller.base";

@swagger.ApiTags("recyclingTrackers")
@common.Controller("recyclingTrackers")
export class RecyclingTrackerController extends RecyclingTrackerControllerBase {
  constructor(protected readonly service: RecyclingTrackerService) {
    super(service);
  }
}
