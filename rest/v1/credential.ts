import type { APICredential, APIPayload, CredentialType } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export interface RESTPostAPICredentialJSONBody {
	guild_id: string;
	user_id: string;
	type: CredentialType;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export interface RESTGetAPICredentialBaseQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export type RESTGetAPICredentialResponse = APIPayload<APICredential>;
