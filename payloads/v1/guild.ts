import type {
	APIBetStats,
	APIBlacklistStats,
	APIGuildBetStats,
	APIGuildMediatorStats,
	APIGuildUserStats,
	APIMediatorStats,
	APIScamStats,
	APIUserStats,
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
	channel_ids: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildChannels {
	parent_thread_ids: string[];
	blacklist_id: string | null;
	command_ids: string[];
	queue_rules: APIGuildQueueRules[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildPermission {
	id: string;
	role_ids: string[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuild {
	guild_id: string;
	permissions: APIGuildPermission[];
	systems: number[];
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
	users: APIGuildUserStats;
	mediators: APIGuildMediatorStats;
	scams: APIScamStats;
	blacklist: APIBlacklistStats;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildsStats {
	bets: APIBetStats;
	users: APIUserStats;
	mediators: APIMediatorStats;
	scams: APIScamStats;
	blacklist: APIBlacklistStats;
}
