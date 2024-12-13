import type { APICredentialType } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export interface RESTPostAPICredentialJSONBody {
	guild_id: string;
	user_id: string;
	type: APICredentialType;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export type RESTGetAPICredentialBaseQuery = {
	guild_id?: string;
};
