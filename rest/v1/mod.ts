import type {
	APIGuildMod,
	APIGuildMods,
	APIPayload,
	GuildModType,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface RESTGetAPIGuildModsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export type RESTGetAPIGuildModsQuery = {
	type?: GuildModType;
	tag?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export type RESTPostAPIGuildModCreateBody = APIGuildMod;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export type RESTPatchAPIGuildModUpdateBody = Partial<APIGuildMod>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export type RESTGetAPIGuildModResponse = APIPayload<APIGuildMod>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export type RESTGetAPIGuildModsResponse = APIPayload<APIGuildMods>;
