import type { APIPayload } from "../../common/v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export type APICredentialType = "admin" | "bronze" | "silver" | "platinum" | "diamond";
export const APICredentialType = {
  Admin: "admin",
  Bronze: "bronze",
  Silver: "silver",
  Platinum: "platinum",
  Diamond: "diamond",
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APICredentialInfo {
  key: string;
  email: string;
  guildId: string;
  type: APICredentialType;
  createdAt: Date;
  updatedAt: Date;
}

export type APICredentialPayload = APIPayload<APICredentialInfo>;
