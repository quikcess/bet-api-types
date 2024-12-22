import type { APIPayload, APIScam } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIScamBaseQuery = {
	guild_id?: string;
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/scam
 */
export type RESTGetAPIScamResponse = APIPayload<APIScam>;
