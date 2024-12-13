import type { APIPayload } from "../../common/v1";

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
export interface APICredentialInfo {
	api_key: string;
	guild_id: string;
	user_id: string;
	type: APICredentialType;
	created_at: string;
	updated_at: string;
}

export type APICredentialPayload = APIPayload<APICredentialInfo>;
