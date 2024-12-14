import type { APIBetResult } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface RESTGetAPIBetsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: Date;
	date_end?: Date;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface RESTGetAPIAllBetsQuery extends RESTGetAPIBetsPaginationQuery {
	guild_id?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetCreateBody = APIBetResult;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetUpdateBody = Partial<APIBetResult>;
