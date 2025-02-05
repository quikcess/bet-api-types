import type {
	APIButtonComponentWithURL,
	APIEmbed,
} from "discord-api-types/v10";
import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credit_panels
 */
export interface APIGuildCreditPanelItem {
	item_id: string;
	name: string;
	value: number;
	emoji: string;
	role_ids: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credit_panels
 */
export enum GuildCreditPanelLogsType {
	Purchase = 1,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credit_panels
 */
export interface APIGuildCreditPanelLogs {
	type: GuildCreditPanelLogsType;
	webhook_url: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/credit_panels
 */
export interface APIGuildCreditPanel {
	guild_id: string;
	name: string;
	description: string;

	items: APIGuildCreditPanelItem[];
	logs: APIGuildCreditPanelLogs[];

	content: string;
	embeds: APIEmbed[];
	buttons: APIButtonComponentWithURL[];
	files: string[];

	created_at: ISODateString;
	updated_at: ISODateString;
}
