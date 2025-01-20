import type { APICredential, APIPayload, CredentialType } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export interface RESTPostAPICredentialJSONBody {
	guild_id: string;
	user_id: string;
	type: CredentialType;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export interface RESTGetAPICredentialBaseQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credentials
 */
export type RESTGetAPICredentialResponse = APIPayload<APICredential>;
