import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUserWallet {
	credits: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUserScores {
	wins: number;
	loses: number;
	consecutives: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUserNotifications {
	events: boolean;
	waiting_bets: boolean;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserBilledRooms {
	purchased: number; // Total rooms purchased
	expenses: number; // Total amount paid to have the rooms based on room_price
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserBilled {
	profit: number; // fee only - rooms.expenses
	fee_only: number; // Total invoiced (fee only)
	rooms: APIUserBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUserStats {
	total: number;
	started: number;
	closed: number;
	pending: number;
	in_progress: number;
	confirmed: number;
	cancelled: number;
	abandoned: number;
	played: number;
	walkover: number; // W.O
	revenged: number;
	punishments: number; // How many times have you been punished?
	won: number;
	lost: number;
	billed: APIUserBilled;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUserContextStats
	extends Omit<APIGuildUserStats, "punishments"> {
	user_id: string | null;
	guild_id: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserStats extends APIGuildUserStats {}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserContextStats extends Omit<APIUserStats, "punishments"> {
	user_id: string | null;
	total_guilds: number;
	top_guild_stats: APITopGuildUserStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APITopGuildUserStats extends APIUserBilled {
	guild_id: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUser {
	user_id: string;
	stats: APIUserStats; // All the time
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUser {
	user_id: string;
	guild_id: string;
	wallet: APIGuildUserWallet;
	stats: APIGuildUserStats;
	scores: APIGuildUserScores;
	notifications: APIGuildUserNotifications;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUsers {
	data: APIUser[];
	current_page: number;
	total_pages: number;
	total_users: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIGuildUsers {
	data: APIGuildUser[];
	current_page: number;
	total_pages: number;
	total_users: number;
}
