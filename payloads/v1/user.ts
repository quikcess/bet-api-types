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
	events: boolean;
	waiting_bets: boolean;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserBilledRooms {
	purchased: number; // Total number of split rooms (tot room: $1.8, split: $0.90)
	investment: number; // Total amount paid to have the rooms based on room_price
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserBilled {
	total: number; // Total invoiced (fee only)
	rooms: APIUserBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserStats {
	confirmed_bets: number;
	abandoned_bet: number; // Confirmed the bet and disappeared
	cancelled_bets: number;
	played_bets: number;
	won_bets: number;
	lost_bets: number;
	walkover_bets: number; // W.O
	billed: APIUserBilled;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUser {
	user_id: string;
	guild_id: string;
	wallet: APIUserWallet;
	stats: APIUserStats; // All the time
	scores: APIUserScores;
	notifications: APIUserNotifications;
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
	total_users: number;
}
