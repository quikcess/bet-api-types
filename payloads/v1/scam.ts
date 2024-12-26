import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export enum ScamType {
	Refund = 1,
	Stealing = 2,
	Cheating = 3,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export enum ScamStatus {
	Pending = 1,
	Investigating = 2,
	Validated = 3,
	Dismissed = 4,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
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
	validated_at?: ISODateString;
	validated_by?: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export interface APIAllScams {
	data: APIScam[];
	current_page: number;
	total_pages: number;
	total_entries: number;
}
