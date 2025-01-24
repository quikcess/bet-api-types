import type { APIAllUsers, APIPayload, APIUser, ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUserBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface RESTGetAPIUsersPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTPostAPIUserCreateBody = APIUser;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTPatchAPIUserUpdateBody = Partial<APIUser>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIUserResponse = APIPayload<APIUser>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export type RESTGetAPIAllUsersResponse = APIPayload<APIAllUsers>;
