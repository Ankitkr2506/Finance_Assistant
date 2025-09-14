import { seedTransactions } from "@/Backend_actions/seed";

export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}
