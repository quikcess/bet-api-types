import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export enum ScamType {
	Refund = 1,
	Stealing = 2,
	Cheating = 3,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export enum ScamStatus {
	Pending = 1,
	Investigating = 2,
	Validated = 3,
	Dismissed = 4,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface APIScam {
	guild_id: string;
	target_name: string;
	type: ScamType;
	status: ScamStatus;
	details: string;
	reported_by: string;
	evidences: string[];
	created_at: ISODateString;
	updated_at: ISODateString;
	validated_at: ISODateString | null;
	validated_by: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface APIScams {
	data: APIScam[];
	current_page: number;
	total_pages: number;
	total_entries: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface APIGuildScamStats {
	guild_id: string;
	total: number;
	pending: number;
	investigating: number;
	validated: number;
	dismissed: number;
	refund: number;
	stealing: number;
	cheating: number;
	recently_added: number; // In the last 24 hours
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface APIScamStats extends APIGuildScamStats {
	total_guilds: number;
	top_guild_stats: APITopGuildScamsStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scams
 */
export interface APITopGuildScamsStats
	extends Omit<APIGuildScamStats, "guild_id"> {
	guild_id: string | null;
}
