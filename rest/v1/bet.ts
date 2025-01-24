import type {
	APIAllBets,
	APIBet,
	APIBetMetrics,
	APIChannelIdsFromPlayerId,
	APIPayload,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIBetsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIAllBetsQuery extends RESTGetAPIBetsPaginationQuery {
	player_ids?: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIAPIChannelIdsFromPlayerIdQuery {
	player_ids?: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTPostAPIBetCreateBody = APIBet;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTPatchAPIBetUpdateBody = Partial<APIBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetResponse = APIPayload<APIBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetBulkResponse = APIPayload<APIBet[]>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIAllBetsResponse = APIPayload<APIAllBets>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetMetrics = APIPayload<APIBetMetrics>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIChannelIdsFromPlayerId =
	APIPayload<APIChannelIdsFromPlayerId>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetThreadWaitTimeResponse = APIPayload<number>;
