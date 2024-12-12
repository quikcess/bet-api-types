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
	apiKey: string;
	guildId: string;
	userId: string;
	type: APICredentialType;
	createdAt: string;
	updatedAt: string;
}

export type APICredentialPayload = APIPayload<APICredentialInfo>;
