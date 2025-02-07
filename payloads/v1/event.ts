import type {
	APIBetFormat,
	BetMode,
	BetPlatform,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export interface APIGuildEventSettings {
	platforms: BetPlatform[];
	formats: APIBetFormat[];
	modes: BetMode[];
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export interface APIGuildEventRules {
	values: (string | number)[];
	min_value: number | null;
	min_wins: number;
	allow: {
		wo: boolean;
		revenge: boolean;
		only_consecutives: boolean;
	};
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export interface APIGuildEventTime {
	start: ISODateString | null;
	end: ISODateString | null;
	tolerance_ms: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export interface APIGuildEvent {
	guild_id: string;
	author_id: string;
	event_name: string;
	settings: APIGuildEventSettings;
	rules: APIGuildEventRules;
	time: APIGuildEventTime;
	created_at: ISODateString;
	updated_at: ISODateString;
}
