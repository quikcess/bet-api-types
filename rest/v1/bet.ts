import type { APIAllBets, APIBet, APIBetAggregateMetrics, APIPayload, ISODateString } from "../../v1";

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
	date_start?: ISODateString;
	date_end?: ISODateString;
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
export type RESTPostAPIBetCreateBody = APIBet;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTPostAPIBetUpdateBody = Partial<APIBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTBetResponse = APIPayload<APIBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAllBetsResponse = APIPayload<APIAllBets>

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetBetAggregateMetrics = APIPayload<APIBetAggregateMetrics>;
