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
export interface APIUserBilled {
	total: number; // Total invoiced (fee + room sales)
	rooms: {
		purchased: number; // Total number of split rooms (tot room: $1.8, split: $0.90)
		investment: number; // Total amount paid to have the rooms based on room_price
	};
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUser {
	user_id: string;
	guild_id: string;
	bets_placed: number; // Number of bets confirmed and played by the user
	bets_won: number; // Number of bets won by the user
	billed: APIUserBilled;
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
	total_users: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserStats {
	analytics: {
		total_guilds: number;
		total_users: number;
		total_bets: number;
		total_mediators: number;
		total_blacklist: number;
		total_scams: number;
	};
	billed: APIUserBilled;
}
