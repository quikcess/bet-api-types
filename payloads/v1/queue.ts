import type { BetType, ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export interface APIGuildQueue {
	guild_id: string;
	queue_id: string;
	channel_id: string;
	type: BetType;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export interface APIGuildQueues {
	data: APIGuildQueue[];
	current_page: number;
	total_pages: number;
	total_queues: number;
}
