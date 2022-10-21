import { atomWithQuery } from "jotai/query";
import { sanitizeUser } from "@/lib/user.module";
import { atom } from "jotai";

type AuthMeResponse = ReturnType<typeof sanitizeUser>;
export const userAtom = atomWithQuery<AuthMeResponse, AuthMeResponse>(() => ({
  queryKey: ["auth me"],
  queryFn: async () => {
    const host = process.env.NEXT_PUBLIC_HOSTNAME ?? 'http://localhost:3000'
    const res = await fetch(`${host}/api/auth/me`);
    return res.json();
  },
}));

export const roadmapAtom = atom({
  Planned: 0,
  InProgress: 0,
  Live: 0,
});
