import type {
	APIAllScams,
	APIPayload,
	APIScam,
	APIScamStats,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTGetAPIScamBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface RESTGetAPIScamPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface RESTGetAPIAllScamsQuery extends RESTGetAPIScamPaginationQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTPostAPIScamCreateBody = APIScam;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTPatchAPIScamUpdateBody = Partial<APIScam>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTGetAPIScamResponse = APIPayload<APIScam>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTGetAPIScamStatsResponse = APIPayload<APIScamStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTGetAPISimilarScamsResponse = APIPayload<APIScam[]>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export type RESTGetAPIAllScamsResponse = APIPayload<APIAllScams>;
