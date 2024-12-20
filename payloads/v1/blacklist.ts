import type { ISODateString } from "../../v1";

export enum BlacklistTargetType {
	Discord = 1,
	FreeFire = 2,
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
export interface APIAllBlacklist {
	data: APIBlacklist[];
	current_page: number;
	total_pages: number;
	total_bets: number;
}
