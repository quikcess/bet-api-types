import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export enum CredentialType {
	Unlimited = 0,
	Carbon = 1,
	Bronze = 2,
	Silver = 3,
	Gold = 4,
	Platinum = 5,
	Diamond = 6,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export interface APICredential {
	api_key: string;
	guild_id: string;
	user_id: string;
	type: CredentialType;
	created_at: ISODateString;
	updated_at: ISODateString;
}
