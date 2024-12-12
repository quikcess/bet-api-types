import type { APICredentialType } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export interface RESTPostAPICredentialJSONBody {
	guildId: string;
	userId: string;
	type: APICredentialType;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credential
 */
export type RESTGetAPICredentialBaseQuery = {
	guildId?: string;
};
