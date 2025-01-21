/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsBets {
  created: string;
  cancelled: string;
  started: string;
  closed: string;
  victory_defined: string;
  updated: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsManagements {
  wins: string;
  loses: string;
  credits: string;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildLogsSystems {
  alerts: string;
  reports: string;
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
  blacklist_id: string;
  command_ids: string[];
  queue_rules: APIGuildQueueRules[]
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuildPermission {
  id: number;
  role_ids: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/guilds
 */
export interface APIGuild {
  guild_id: string;
  permissions: APIGuildPermission[];
  systems: number[];
  channels: APIGuildChannels;
  logs: APIGuildLogs
}