import type {
	APIGuildMediator,
	APIGuildMediatorStats,
	APIGuildMediators,
	APIMediatorStats,
	APIMediators,
	APIPayload,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface RESTGetAPIGuildMediatorsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTPostAPIGuildMediatorCreateBody = APIGuildMediator;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTPatchAPIGuildMediatorUpdateBody = Partial<APIGuildMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorResponse = APIPayload<APIGuildMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorStatsResponse =
	APIPayload<APIGuildMediatorStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorStatsResponse = APIPayload<APIMediatorStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorsResponse = APIPayload<APIMediators>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorsResponse = APIPayload<APIGuildMediators>;
