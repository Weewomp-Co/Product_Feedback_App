import { SecretBox } from "soya-sauce";

export const box = new SecretBox({ disableKeyPairs: true }).withMasterKey("dev_only")
