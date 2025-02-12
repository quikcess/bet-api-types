import type {
	APIBetStats,
	APIBlacklistStats,
	APIGuildBetStats,
	APIGuildMediatorContextStats,
	APIGuildUserContextStats,
	APIMediatorContextStats,
	APIScamStats,
	APIUserContextStats,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsBets {
	created: string | null;
	cancelled: string | null;
	started: string | null;
	closed: string | null;
	victory_defined: string | null;
	updated: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsManagements {
	wins: string | null;
	loses: string | null;
	credits: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsSystems {
	alerts: string | null;
	reports: string | null;
	resets: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogs {
	bets: APIGuildLogsBets;
	managements: APIGuildLogsManagements;
	systems: APIGuildLogsSystems;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildQueueRules {
	queue_name: string;
	channel_id: string | null;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildChannels {
	parent_thread_ids: string[];
	blacklist_id: string | null;
	scam_id: string | null;
	command_ids: string[];
	queue_rules: APIGuildQueueRules[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildPermission {
	id: number;
	role_ids: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildBetTax {
	rate: number;
	min_value: number;
	max_value: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildBetSettings {
	queue_rules: APIGuildQueueRules[];
	taxes: APIGuildBetTax[];
	room_price: number;
	threshold: number;
	started_time: number;
}

export interface APIGuildSettings {
	bet: APIGuildBetSettings;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuild {
	guild_id: string;
	prefix: string;
	permissions: APIGuildPermission[];
	systems: number[];
	settings: APIGuildSettings;
	channels: APIGuildChannels;
	logs: APIGuildLogs;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuilds {
	data: APIGuild[];
	current_page: number;
	total_pages: number;
	total_guilds: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildStats {
	bets: APIGuildBetStats;
	users: APIGuildUserContextStats;
	mediators: APIGuildMediatorContextStats;
	scams: APIScamStats;
	blacklist: APIBlacklistStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildsStats {
	bets: APIBetStats;
	users: APIUserContextStats;
	mediators: APIMediatorContextStats;
	scams: APIScamStats;
	blacklist: APIBlacklistStats;
}
