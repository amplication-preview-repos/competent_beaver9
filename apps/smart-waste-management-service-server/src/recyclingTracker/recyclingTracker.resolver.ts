import * as graphql from "@nestjs/graphql";
import { RecyclingTrackerResolverBase } from "./base/recyclingTracker.resolver.base";
import { RecyclingTracker } from "./base/RecyclingTracker";
import { RecyclingTrackerService } from "./recyclingTracker.service";

@graphql.Resolver(() => RecyclingTracker)
export class RecyclingTrackerResolver extends RecyclingTrackerResolverBase {
  constructor(protected readonly service: RecyclingTrackerService) {
    super(service);
  }
}
