import { atomWithQuery } from "jotai/query";
import { sanitizeUser } from "@/lib/user.module";
import { atom } from "jotai";

type AuthMeResponse = ReturnType<typeof sanitizeUser>;
export const userAtom = atomWithQuery<AuthMeResponse, AuthMeResponse>(() => ({
  queryKey: ["auth me"],
  queryFn: async () => {
    const res = await fetch(`http://localhost:3000/api/auth/me`);
    return res.json();
  },
}));

export const roadmapAtom = atom({
  Planned: 0,
  InProgress: 0,
  Live: 0,
});
