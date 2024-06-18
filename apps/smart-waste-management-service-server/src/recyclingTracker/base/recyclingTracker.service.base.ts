/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  RecyclingTracker as PrismaRecyclingTracker,
} from "@prisma/client";

export class RecyclingTrackerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecyclingTrackerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recyclingTracker.count(args);
  }

  async recyclingTrackers(
    args: Prisma.RecyclingTrackerFindManyArgs
  ): Promise<PrismaRecyclingTracker[]> {
    return this.prisma.recyclingTracker.findMany(args);
  }
  async recyclingTracker(
    args: Prisma.RecyclingTrackerFindUniqueArgs
  ): Promise<PrismaRecyclingTracker | null> {
    return this.prisma.recyclingTracker.findUnique(args);
  }
  async createRecyclingTracker(
    args: Prisma.RecyclingTrackerCreateArgs
  ): Promise<PrismaRecyclingTracker> {
    return this.prisma.recyclingTracker.create(args);
  }
  async updateRecyclingTracker(
    args: Prisma.RecyclingTrackerUpdateArgs
  ): Promise<PrismaRecyclingTracker> {
    return this.prisma.recyclingTracker.update(args);
  }
  async deleteRecyclingTracker(
    args: Prisma.RecyclingTrackerDeleteArgs
  ): Promise<PrismaRecyclingTracker> {
    return this.prisma.recyclingTracker.delete(args);
  }
}
