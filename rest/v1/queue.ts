import type { APIGuildQueue, APIGuildQueues } from "../../payloads/v1/queue";
import type { APIPayload, DeepPartial, ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export interface RESTGetAPIGuildQueuesPaginationQuery {
	page?: number;
	limit?: number;
	skip?: number;
	date_start?: ISODateString;
	date_end?: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export type RESTPatchAPIGuildQueueUpdateBody = DeepPartial<APIGuildQueue>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export type RESTGetAPIGuildQueueResponse = APIPayload<APIGuildQueue>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export type RESTGetAPIGuildQueuesResponse = APIPayload<APIGuildQueues>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export type RESTGetAPIGuildQueueBulkResponse = APIPayload<APIGuildQueue[]>;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/queues
 */
export type RESTPostAPIGuildQueueCreateBody = APIGuildQueue;
