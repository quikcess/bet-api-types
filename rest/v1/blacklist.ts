import type {
	APIAllBlacklist,
	APIBlacklist,
	APIBlacklistStats,
	APIPayload,
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
export interface RESTGetAPIBlacklistPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface RESTGetAPIAllBlacklistQuery
	extends RESTGetAPIBlacklistPaginationQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTPostAPIBlacklistCreateBody = APIBlacklist;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export type RESTPatchAPIBlacklistUpdateBody = Partial<APIBlacklist>;

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
export type RESTGetAPIAllBlacklistResponse = APIPayload<APIAllBlacklist>;
