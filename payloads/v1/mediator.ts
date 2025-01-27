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
	invoicing: number; // Total revenue generated from selling rooms, based on room_price (from the bet schema)
	investment: number; // Total cost incurred to purchase the rooms, based on room_price (from the bet schema)
	profit: number; // Net profit calculated as invoicing minus investment, based on room_price (from the bet schema)
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorBilled {
	profit: number; // Total invoiced (fee + room sales)
	fee_only: number; // Total billed without rooms, only with the imposed fee
	rooms: APIMediatorBilledRooms;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mediators
 */
export interface APIMediatorStats {
	total: number;
	started: number;
	closed: number;
	pending: number;
	in_progress: number;
	cancelled: number;
	abandoned: number; // Confirmed the bet and disappeared
	played: number; // Bets with any winner
	walkover: number; // W.O
	revenged: number;
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
