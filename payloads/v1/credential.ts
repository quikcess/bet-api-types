import type { APIPayload } from "../../common/v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export type APICredentialType =
	| "admin"
	| "bronze"
	| "silver"
	| "platinum"
	| "diamond";
export const APICredentialType = {
	Admin: "admin",
	Bronze: "bronze",
	Silver: "silver",
	Platinum: "platinum",
	Diamond: "diamond",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
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
