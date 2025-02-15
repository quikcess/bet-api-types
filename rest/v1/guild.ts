import type {
	APIGuild,
	APIGuildStats,
	APIGuilds,
	APIGuildsStats,
	APIPayload,
	DeepPartial,
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
export type RESTPatchAPIGuildUpdateBody = DeepPartial<APIGuild>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildResponse = APIPayload<APIGuild>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildStatsResponse = APIPayload<APIGuildStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildsStatsResponse = APIPayload<APIGuildsStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildsResponse = APIPayload<APIGuilds>;
