import * as graphql from "@nestjs/graphql";
import { WasteCollectionScheduleResolverBase } from "./base/wasteCollectionSchedule.resolver.base";
import { WasteCollectionSchedule } from "./base/WasteCollectionSchedule";
import { WasteCollectionScheduleService } from "./wasteCollectionSchedule.service";

@graphql.Resolver(() => WasteCollectionSchedule)
export class WasteCollectionScheduleResolver extends WasteCollectionScheduleResolverBase {
  constructor(protected readonly service: WasteCollectionScheduleService) {
    super(service);
  }
}
