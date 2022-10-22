import { SecretBox } from "soya-sauce";

export const box = new SecretBox({ disableKeyPairs: true })
  .withMasterKey(process.env.MASTER_KEY ?? "dev_only")
