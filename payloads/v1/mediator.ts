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
export interface APIMediatorBilledRooms {
	sold: number; // Total number of rooms sold
	invoicing: number; // Total amount billed for rooms only based on room_price (bet schema)
	investment: number; // Total amount paid to have the rooms based on room_price (bet schema)
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorBilled {
	total: number; // Total invoiced (fee + room sales)
	fee_only: number; // Total billed without rooms, only with the imposed fee
	rooms: APIMediatorBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorStats {
	confirmed_bets: number;
	cancelled_bets: number;
	abandoned_bet: number; // Confirmed the bet and disappeared
	played_bets: number;
	winner_bets: number; // Bets with any winner
	walkover_bets: number; // W.O
	billed: APIMediatorBilled;
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
	stats: APIMediatorStats; // All the time
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
	total_mediators: number;
}
