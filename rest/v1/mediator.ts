import type {
	APIAllMediators,
	APIMediator,
	APIMediatorStats,
	APIPayload,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface RESTGetAPIMediatorsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTPostAPIMediatorCreateBody = APIMediator;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTPatchAPIMediatorUpdateBody = Partial<APIMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorResponse = APIPayload<APIMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorsResponse = APIPayload<APIMediator[]>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorStatsResponse = APIPayload<APIMediatorStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIAllMediatorsResponse = APIPayload<APIAllMediators>;
