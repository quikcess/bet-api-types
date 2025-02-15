import type {
	APIBetStats,
	APIGuildBet,
	APIGuildBetStats,
	APIGuildBets,
	APIPayload,
	BetStatus,
	DeepPartial,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIGuildBetsPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIGuildBetsQuery
	extends RESTGetAPIGuildBetsPaginationQuery {
	player_ids?: string[];
	status?: BetStatus[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetCountQuery = {
	mediator_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface RESTGetAPIChannelIdsFromPlayerIdQuery {
	player_ids?: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTPostAPIGuildBetCreateBody = APIGuildBet;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTPatchAPIGuildBetUpdateBody = DeepPartial<APIGuildBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetResponse = APIPayload<APIGuildBet>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetBulkResponse = APIPayload<APIGuildBet[]>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetsResponse = APIPayload<APIGuildBets>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetStatsResponse = APIPayload<APIGuildBetStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIBetStatsResponse = APIPayload<APIBetStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetThreadWaitTimeResponse = APIPayload<number>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type RESTGetAPIGuildBetCountResponse = APIPayload<number>;
