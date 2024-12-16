import type { ISODateString } from "../../common/v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export type APICredentialType =
	| "unlimited"
	| "bronze"
	| "silver"
	| "platinum"
	| "diamond";
export const APICredentialType = {
	Unlimited: "unlimited",
	Bronze: "bronze",
	Silver: "silver",
	Platinum: "platinum",
	Diamond: "diamond",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export interface APICredential {
	api_key: string;
	guild_id: string;
	user_id: string;
	type: APICredentialType;
	created_at: ISODateString;
	updated_at: ISODateString;
}

