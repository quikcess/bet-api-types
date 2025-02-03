import type {
	APIButtonComponentWithURL,
	APIEmbed,
} from "discord-api-types/v10";
import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/automessages
 */
export enum AutoMessageType {
	Default = 1,
	BetsCreated = 2,
	BetsStarted = 3,
	BetsPlaying = 4,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/automessages
 */
export interface APIGuildAutoMessagePayload {
	embeds?: APIEmbed[];
	content?: string;
	files?: string[];
	buttons?: APIButtonComponentWithURL[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/automessages
 */
export interface APIGuildAutoMessage {
	id: string;
	guild_id: string;
	type: AutoMessageType;
	payload: APIGuildAutoMessagePayload;
	time_start: ISODateString;
	time_end: ISODateString;
	created_at: ISODateString;
	updated_at: ISODateString;
}
