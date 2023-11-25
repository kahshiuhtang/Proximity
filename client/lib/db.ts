import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Hot reload -> every single time line of code is changed, don't want to keep making prisma clients
//globalThis is not affected by hot reload
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
