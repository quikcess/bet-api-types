import type { APIGuildAutoMessage, APIPayload } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/automessages
 */
export type RESTGetAPIGuildAutoMessageResponse =
	APIPayload<APIGuildAutoMessage>;
