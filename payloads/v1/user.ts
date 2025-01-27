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
	started: number;
	closed: number;
	pending: number;
	in_progress: number;
	confirmed: number;
	cancelled: number;
	abandoned: number; // Confirmed the bet and disappeared
	played: number; // Bets with any winner
	walkover: number; // W.O
	revenged: number;
	won: number;
	lost: number;
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
