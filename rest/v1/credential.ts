import type { APICredentialType } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface RESTPostAPICredentialJSONBody {
	guildId: string;
	email: string;
	type: APICredentialType;
}
