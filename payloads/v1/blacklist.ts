import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export enum BlacklistTargetType {
	Discord = 1,
	FreeFire = 2,
	IMEI = 3,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export enum BlacklistStatus {
	Pending = 1,
	Investigating = 2,
	Validated = 3,
	Dismissed = 4,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface APIBlacklist {
	guild_id: string;
	target_id: string;
	target_type: BlacklistTargetType;
	status: BlacklistStatus;
	added_by: string;
	reason: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface APIBlacklists {
	data: APIBlacklist[];
	current_page: number;
	total_pages: number;
	total_entries: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface APIGuildBlacklistStats {
	guild_id: string;
	total: number;
	pending: number;
	investigating: number;
	validated: number;
	dismissed: number;
	discord: number;
	freefire: number;
	imei: number;
	recently_added: number; // In the last 24 hours
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface APIBlacklistStats extends APIGuildBlacklistStats {
	total_guilds: number;
	top_guild_stats: APITopGuildBlacklistStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/blacklist
 */
export interface APITopGuildBlacklistStats
	extends Omit<APIGuildBlacklistStats, "guild_id"> {
	guild_id: string | null;
}
