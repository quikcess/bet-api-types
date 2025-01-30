import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export enum BetType {
	Regenerative = 1,
	Customized = 2,
	Specialized = 3,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export enum BetGelType {
	Normal = 1,
	Infinity = 2,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export enum BetPlatform {
	Mobile = 1,
	Emulador = 2,
	Misto = 3,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export enum BetStatus {
	Pending = 1,
	Started = 2,
	InProgress = 3,
	Closed = 4,
	Revenged = 5,
	Cancelled = 6,
	Abandoned = 7,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type BetMode = "1x1" | "2x2" | "3x3" | "4x4" | "5x5" | "6x6";
export const BetMode = {
	x1: "1x1",
	x2: "2x2",
	x3: "3x3",
	x4: "4x4",
	x5: "5x5",
	x6: "6x6",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetLog {
	created_url: string | null;
	started_url: string | null;
	victory_url: string | null;
	closed_url: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetPlayer {
	user_id: string;
	winner: boolean | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type APIBetFormat = string;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIGuildBet {
	bet_id: string;
	guild_id: string;
	platform: BetPlatform;
	format: APIBetFormat;
	mode: BetMode;
	players: APIBetPlayer[];
	players_who_confirmed: string[];
	cancelled_by: string | null;
	abandoned_by: string | null;
	given_up_by: string | null; // User who gave up the game
	status: BetStatus;
	type: BetType;
	room_id: number;
	room_price: number;
	value: number | string;
	queue_channel_id: string;
	channel_id: string;
	mediator_id: string;
	wo: boolean;
	revenge: boolean;
	emulators: number;
	gel_type: BetGelType;
	gel_count: number;
	created_at: ISODateString;
	updated_at: ISODateString;
	started_at: ISODateString;
	closed_at: ISODateString | null;
	logs: APIBetLog;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIGuildBets {
	data: APIGuildBet[];
	current_page: number;
	total_pages: number;
	total_bets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetBilledRooms {
	sold: number; // Total number of rooms sold
	revenue: number; // Total revenue generated from selling rooms, based on room_price (from the bet schema)
	expenses: number; // Total expenses incurred to purchase the rooms, based on room_price (from the bet schema)
	profit: number; // Net profit calculated as revenue minus expenses, based on room_price (from the bet schema)
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetBilled {
	profit: number; // Total profit (fee_only + rooms.profit)
	fee_only: number; // Total billed without rooms, only with the imposed fee
	revenue: number; // Total revenue (fee_only + rooms.revenue)
	rooms: APIBetBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIGuildBetStats {
	guild_id: string;
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
	billed: APIBetBilled;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetStats extends Omit<APIGuildBetStats, "guild_id"> {
	total_guilds: number;
	top_guild_stats: APITopGuildStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APITopGuildStats extends APIBetBilled {
	guild_id: string | null;
}
