import type { APIGuildEvent } from "../../payloads/v1/event";
import type { APIPayload } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export type RESTGetAPIGuildEventResponse = APIPayload<APIGuildEvent>;
