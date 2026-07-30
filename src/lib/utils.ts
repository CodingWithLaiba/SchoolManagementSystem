import { auth } from "@clerk/nextjs";

 const { userId, sessionClaims } = auth();
 export const role = (sessionClaims?.metadata as { role?: string })?.role;
