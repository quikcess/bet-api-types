import type {
	APIButtonComponent,
	APIEmbed,
	APISelectMenuComponent,
} from "discord-api-types/v10";
import type { ISODateString } from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export enum GuildModType {
	Queue = 1,
	Ranking = 2,
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface APIGuildModComponents {
	buttons: APIButtonComponent[];
	select_menus: APISelectMenuComponent[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface APIGuildModData {
	embeds: APIEmbed[];
	content: string;
	components: APIGuildModComponents;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface APIGuildMod {
	guild_id: string;
	type: GuildModType;
	tag: string;
	data: APIGuildModData;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/mods
 */
export interface APIGuildMods {
	data: APIGuildMod[];
	current_page: number;
	total_pages: number;
	total_mods: number;
}
