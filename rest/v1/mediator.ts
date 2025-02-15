import type {
	APIGuildMediator,
	APIGuildMediatorContextStats,
	APIGuildMediators,
	APIMediator,
	APIMediatorContextStats,
	APIMediators,
	APIPayload,
	DeepPartial,
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
export type RESTGetAPIMediatorQuery = {
	upsert?: boolean;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorQuery = {
	upsert?: boolean;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTPatchAPIGuildMediatorUpdateQuery = {
	upsert?: boolean;
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
export type RESTPatchAPIGuildMediatorUpdateBody = DeepPartial<APIGuildMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorResponse = APIPayload<APIGuildMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildLeastLoadedMediatorResponse = APIPayload<
	APIGuildMediator | undefined
>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildLeastLoadedMediatorBody = APIGuildMediator;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorResponse = APIPayload<APIMediator>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorsResponse = APIPayload<APIGuildMediators>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorsResponse = APIPayload<APIMediators>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIGuildMediatorStatsResponse =
	APIPayload<APIGuildMediatorContextStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export type RESTGetAPIMediatorStatsResponse =
	APIPayload<APIMediatorContextStats>;
