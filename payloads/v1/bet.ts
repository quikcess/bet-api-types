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
	wins: number;
	loses: number;
	consecutives: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type APIBetFormat = string;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBet {
	guild_id: string;
	bet_id: string;
	platform: BetPlatform;
	format: APIBetFormat;
	mode: BetMode;
	players: APIBetPlayer[];
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
export interface APIAllBets {
	data: APIBet[];
	current_page: number;
	total_pages: number;
	total_bets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetBilledRooms {
	sold: number; // Total number of rooms sold
	invoicing: number; // Total amount billed for rooms only based on room_price (bet schema)
	investment: number; // Total amount paid to have the rooms based on room_price (bet schema)
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetBilled {
	total: number; // Total invoiced (fee + room sales)
	fee_only: number; // Total billed without rooms, only with the imposed fee
	rooms: APIBetBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export interface APIBetStats {
	total: number;
	opened: number;
	closed: number;
	pending: number;
	in_progress: number;
	confirmed_bets: number;
	cancelled_bets: number;
	abandoned_bet: number; // Confirmed the bet and disappeared
	played_bets: number;
	winner_bets: number; // Bets with any winner
	walkover_bets: number; // W.O
	billed: APIBetBilled;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bets
 */
export type APIChannelIdsFromPlayerId = Record<string, string[]>;
