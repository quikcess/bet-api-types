import type {
	APIGuildUser,
	APIGuildUserContextStats,
	APIGuildUsers,
	APIPayload,
	APIUser,
	APIUserContextStats,
	APIUsers,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIGuildUserBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUserQuery = {
	upsert?: boolean;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIGuildUserQuery = {
	upsert?: boolean;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTPatchAPIGuildUserUpdateQuery = {
	upsert?: boolean;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface RESTGetAPIGuildUsersPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTPostAPIGuildUserCreateBody = APIGuildUser;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTPatchAPIGuildUserUpdateBody = Partial<APIGuildUser>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIGuildUserResponse = APIPayload<APIGuildUser>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUserResponse = APIPayload<APIUser>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIGuildUsersResponse = APIPayload<APIGuildUsers>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUsersResponse = APIPayload<APIUsers>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUserStatsResponse = APIPayload<APIUserContextStats>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIGuildUserStatsResponse =
	APIPayload<APIGuildUserContextStats>;
