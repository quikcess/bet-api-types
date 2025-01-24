import type {
	APIAllGuilds,
	APIGuild,
	APIPayload,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface RESTGetAPIGuildsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTPostAPIGuildCreateBody = APIGuild;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTPatchAPIGuildUpdateBody = Partial<APIGuild>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildResponse = APIPayload<APIGuild>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIAllGuildsResponse = APIPayload<APIAllGuilds>;
