import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorLimiter {
	simultaneous: number;
	daily: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorSignature {
	role_id: string | null;
	expiration_time: number | null;
	autorole: boolean;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorPix {
	key: string;
	name: string;
	message: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediator {
	user_id: string;
	guild_id: string;
	category_id: string | null;
	pix: APIMediatorPix;
	virtual_accounts: number;
	uptime: number;
	last_entry: number | null;
	signature: APIMediatorSignature;
	limiter: APIMediatorLimiter;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIAllMediators {
  data: APIMediator[];
  current_page: number;
  total_pages: number;
  total_bets: number;
}