import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserWallet {
	credits: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserScores {
	wins: number;
	loses: number;
	consecutives: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserNotifications {
	events: number;
	waiting_bets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUser {
	user_id: string;
	guild_id: string;
	wallet: APIUserWallet;
	scores: APIUserScores;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIAllUsers {
  data: APIUser[];
  current_page: number;
  total_pages: number;
  total_bets: number;
}