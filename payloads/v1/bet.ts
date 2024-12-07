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
  Normal: "1v1",
  Tático: "1v1",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetStatus = "waiting" | "started" | "playing" | "closed" | "revenged";
export const APIBetStatus = {
  Waiting: "waiting",
  Started: "started",
  Playing: "playing",
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
export interface APIBetPlayerDetails {
  gelType: APIBetGelType;
  emulators: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetRegenerativePlayer {
  userId: string;
  details: APIBetPlayerDetails;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetCustomizedPlayer {
  userId: string;
  details: APIBetPlayerDetails & { platform: APIBetPlatform };
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetSpecializedPlayer {
  userId: string;
  details: APIBetPlayerDetails & { value: number | string };
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export type APIBetPlayer = APIBetRegenerativePlayer | APIBetCustomizedPlayer | APIBetSpecializedPlayer;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/bet
 */
export interface APIBetInfo {
  guildId: string;
  betId: string;
  platform: APIBetPlatform;
  format: APIBetFormat;
  mode: APIBetMode;
  players: APIBetPlayer;
  status: APIBetStatus;
  type: APIBetType;
  value: number | string;
  queueChannelId: string;
  channelId: string;
  mediatorId: string;
  wo: boolean;
  revenge: boolean;
  emulators: number;
  gelType: APIBetGelType;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date;
  closedAt: Date | null;
  expireAt: Date;
}

export interface APIAllBetsPayload {
  data: APIBetInfo[];
  currentPage: number;
  totalPages: number;
  totalBets: number;
}

export type APIBetPayload = APIPayload<APIBetInfo>;
