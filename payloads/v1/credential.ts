import type { ISODateString } from "../../common/v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export enum CredentialType {
	Unlimited = 0,
	Bronze = 1,
	Silver = 2,
	Platinum = 3,
	Diamond = 4,
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
