import type { APIBetResult } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface RESTGetAPIBetsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	dateStart?: Date;
	dateEnd?: Date;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetBaseQuery = {
	guildId?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface RESTGetAPIAllBetsQuery extends RESTGetAPIBetsPaginationQuery {
	guildId?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetCreateBody = APIBetResult;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type RESTGetAPIBetUpdateBody = Partial<APIBetResult>;
