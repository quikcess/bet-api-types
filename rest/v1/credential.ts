import type { APICredentialType } from "../../v1";

export interface RESTPostAPICredentialJSONBody {
	guildId: string;
	email: string;
	type: APICredentialType;
}
