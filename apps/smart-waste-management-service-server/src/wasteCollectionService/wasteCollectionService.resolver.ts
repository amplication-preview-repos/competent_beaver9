import * as graphql from "@nestjs/graphql";
import { WasteCollectionServiceResolverBase } from "./base/wasteCollectionService.resolver.base";
import { WasteCollectionService } from "./base/WasteCollectionService";
import { WasteCollectionServiceService } from "./wasteCollectionService.service";

@graphql.Resolver(() => WasteCollectionService)
export class WasteCollectionServiceResolver extends WasteCollectionServiceResolverBase {
  constructor(protected readonly service: WasteCollectionServiceService) {
    super(service);
  }
}
