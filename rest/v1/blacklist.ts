import type {
	APIBlacklist,
	APIBlacklistStats,
	APIBlacklists,
	APIGuildBlacklistStats,
	APIPayload,
	DeepPartial,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTGetAPIBlacklistBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface RESTGetAPIBlacklistsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface RESTGetAPIBlacklistsQuery
	extends RESTGetAPIBlacklistsPaginationQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTPostAPIBlacklistCreateBody = APIBlacklist;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTPatchAPIBlacklistUpdateBody = DeepPartial<APIBlacklist>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTGetAPIBlacklistResponse = APIPayload<APIBlacklist>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTGetAPIBlacklistStatsResponse = APIPayload<APIBlacklistStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTGetAPIGuildBlacklistStatsResponse =
	APIPayload<APIGuildBlacklistStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTGetAPIBlacklistsResponse = APIPayload<APIBlacklists>;
