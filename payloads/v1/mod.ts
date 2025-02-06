import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface APIGuildMod {
	guild_id: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}
