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
export interface APIAllScams {
	data: APIScam[];
	current_page: number;
	total_pages: number;
	total_entries: number;
}
