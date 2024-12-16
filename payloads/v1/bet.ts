import type { ISODateString } from "../../common/v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetType = "regenerative" | "customized" | "specialized";
export const APIBetType = {
	Regenerative: "regenerative",
	Customized: "customized",
	Specialized: "specialized",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetGelType = "normal" | "infinito";
export const APIBetGelType = {
	Normal: "normal",
	Infinity: "infinito",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetPlatform = "mobile" | "emulador" | "misto";
export const APIBetPlatform = {
	Mobile: "mobile",
	Emulador: "emulador",
	Misto: "misto",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */

export type APIBetFormat = "Normal" | "Tático" | string;
export const APIBetFormat = {
	Normal: "Normal",
	Tático: "Tático",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetStatus =
	| "pending"
	| "started"
	| "in_progress"
	| "closed"
	| "revenged";
export const APIBetStatus = {
	Pending: "pending",
	Started: "started",
	InProgress: "in_progress",
	Closed: "closed",
	Revenged: "revenged",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetMode = "1v1" | "2v2" | "3v3" | "4v4" | "5v5" | "6v6";
export const APIBetMode = {
	v1: "1v1",
	v2: "2v2",
	v3: "3v3",
	v4: "4v4",
	v5: "5v5",
	v6: "6v6",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetLog {
	created_url: string;
	started_url: string;
	victory_url: string;
	closed_url: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetPlayerDetails {
	gel_type: APIBetGelType;
	emulators: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetPlayerBase {
	user_id: string;
	wins: number;
	loses: number;
	consecutives: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetRegenerativePlayer extends APIBetPlayerBase {
	details: APIBetPlayerDetails;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetCustomizedPlayer extends APIBetPlayerBase {
	details: APIBetPlayerDetails & { platform: APIBetPlatform };
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetSpecializedPlayer extends APIBetPlayerBase {
	details: APIBetPlayerDetails & { value: number | string };
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetPlayer =
	| APIBetRegenerativePlayer
	| APIBetCustomizedPlayer
	| APIBetSpecializedPlayer;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBet {
	guild_id: string;
	bet_id: string;
	platform: APIBetPlatform;
	format: APIBetFormat;
	mode: APIBetMode;
	players: APIBetPlayer[];
	status: APIBetStatus;
	type: APIBetType;
	room_id: number;
	value: number | string;
	queue_channel_id: string;
	channel_id: string;
	mediator_id: string;
	wo: boolean;
	revenge: boolean;
	emulators: number;
	gel_type: APIBetGelType;
	created_at: ISODateString;
	updated_at: ISODateString;
	started_at: ISODateString;
	closed_at: ISODateString | null;
	logs: APIBetLog;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIAllBets {
	data: APIBet[];
	current_page: number;
	total_pages: number;
	total_bets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetAggregateMetrics {
	total: number;
	openeds: number;
	closeds: number;
	pending: number;
	in_progress: number;
}