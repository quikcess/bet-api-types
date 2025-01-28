import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIGuildMediatorLimiter {
	simultaneous: number;
	daily: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIGuildMediatorSignature {
	role_id: string | null;
	expiration_time: number | null;
	autorole: boolean;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIGuildMediatorPix {
	key: string;
	name: string;
	message: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorBilledRooms {
	sold: number; // Total number of rooms sold
	revenue: number; // Total revenue generated from selling rooms, based on room_price (from the bet schema)
	expenses: number; // Total expenses incurred to purchase the rooms, based on room_price (from the bet schema)
	profit: number; // Net profit calculated as revenue minus expenses, based on room_price (from the bet schema)
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorBilled {
	profit: number; // Total profit (fee_only + rooms.profit)
	fee_only: number; // Total billed without rooms, only with the imposed fee
	revenue: number; // Total revenue (fee_only + rooms.revenue)
	rooms: APIMediatorBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIGuildMediatorStats {
	total: number;
	started: number;
	closed: number;
	pending: number;
	in_progress: number;
	cancelled: number;
	abandoned: number; // Confirmed the bet and disappeared
	played: number; // Bets with any winner
	walkover: number; // W.O
	revenged: number;
	billed: APIMediatorBilled;
}

export interface APITopGuildMediatorStats {
	guild_id: string;
	highest_fee_only: number;
	highest_profit: number;
	highest_expenses: number;
	highest_revenue: number;
	rooms_sold: number;
}

export interface APIGuildMediatorStatsPayload extends APIGuildMediatorStats {
	user_id: string;
	guild_id: string;
}

export interface APIMediatorStats
	extends Exclude<APIGuildMediatorStats, "guild_id"> {
	total_guilds: number;
	top_guild_stats: APITopGuildMediatorStats;
}

export interface APIMediatorStatsPayload extends APIMediatorStats {
	user_id: string;
	guild_id: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediator {
	user_id: string;
	uptime: number;
	last_entry: number | null;
	stats: APIMediatorStats; // All the time
	created_at: ISODateString;
	updated_at: ISODateString;
}

export interface APIGuildMediator {
	user_id: string;
	guild_id: string;
	category_id: string | null;
	pix: APIGuildMediatorPix;
	virtual_accounts: number;
	uptime: number;
	last_entry: number | null;
	signature: APIGuildMediatorSignature;
	limiter: APIGuildMediatorLimiter;
	stats: APIGuildMediatorStats;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediators {
	data: APIMediator[];
	current_page: number;
	total_pages: number;
	total_mediators: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIGuildMediators {
	data: APIGuildMediator[];
	current_page: number;
	total_pages: number;
	total_mediators: number;
}
