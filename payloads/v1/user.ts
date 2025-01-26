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
	purchased: number; // Total rooms purchased
	investment: number; // Total amount paid to have the rooms based on room_price
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserBilled {
	fee_only: number; // Total invoiced (fee only)
	profit: number;
	rooms: APIUserBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserStats {
	total: number;
	started_bets: number;
	closed_bets: number;
	pending_bets: number;
	in_progress_bets: number;
	confirmed_bets: number;
	cancelled_bets: number;
	abandoned_bets: number; // Confirmed the bet and disappeared
	played_bets: number; // Bets with any winner
	walkover_bets: number; // W.O
	revenged_bets: number;
	won_bets: number;
	lost_bets: number;
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
