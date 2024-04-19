"use server";
import prisma from "@repo/db/client";
import { authOptions } from "./auth";
import { getServerSession } from "next-auth";

export async function getRecievedTransfers() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);
  const transfers = await prisma.p2pTransfer.findMany({
    where: { toUserId: id },
  });
  return transfers;
}
