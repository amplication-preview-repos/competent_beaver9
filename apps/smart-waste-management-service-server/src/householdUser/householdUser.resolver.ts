import * as graphql from "@nestjs/graphql";
import { HouseholdUserResolverBase } from "./base/householdUser.resolver.base";
import { HouseholdUser } from "./base/HouseholdUser";
import { HouseholdUserService } from "./householdUser.service";

@graphql.Resolver(() => HouseholdUser)
export class HouseholdUserResolver extends HouseholdUserResolverBase {
  constructor(protected readonly service: HouseholdUserService) {
    super(service);
  }
}
