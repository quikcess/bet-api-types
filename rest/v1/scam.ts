import type {
  APIAllScam,
  APIPayload,
  APIScam,
  ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIScamBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export interface RESTGetAPIScamPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export interface RESTGetAPIAllScamQuery
	extends RESTGetAPIScamPaginationQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTPostAPIScamCreateBody = APIScam;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTPatchAPIScamUpdateBody = Partial<APIScam>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIScamResponse = APIPayload<APIScam>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIScamHasResponse = APIPayload<boolean>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIAllScamResponse = APIPayload<APIAllScam>;
