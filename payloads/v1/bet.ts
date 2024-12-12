import type { APIPayload } from "../../common/v1";

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
	createdUrl: string;
	startedUrl: string;
	victoryUrl: string;
	closedUrl: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetPlayerDetails {
	gelType: APIBetGelType;
	emulators: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetPlayerBase {
	userId: string;
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
export interface APIBetResult {
	guildId: string;
	betId: string;
	platform: APIBetPlatform;
	format: APIBetFormat;
	mode: APIBetMode;
	players: APIBetPlayer[];
	status: APIBetStatus;
	type: APIBetType;
	roomId: number;
	value: number | string;
	queueChannelId: string;
	channelId: string;
	mediatorId: string;
	wo: boolean;
	revenge: boolean;
	emulators: number;
	gelType: APIBetGelType;
	createdAt: string;
	updatedAt: string;
	startedAt: string;
	closedAt: string | null;
	logs: APIBetLog;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetResultPayload = APIPayload<APIBetResult>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIAllBetsResult {
	data: APIBetResult[];
	currentPage: number;
	totalPages: number;
	totalBets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIAllBetsResultPayload = APIPayload<APIAllBetsResult>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetAggregateMetricsResult {
	total: number;
	openeds: number;
	closeds: number;
	pending: number;
	in_progress: number;
}
