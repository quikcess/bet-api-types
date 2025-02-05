import type {
	APIBetFormat,
	BetMode,
	BetPlatform,
	ISODateString,
} from "../../v1";

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/events
 */
export interface APIGuildEvent {
	guild_id: string;
	author_id: string;
	name: string;

	settings: {
		platforms: BetPlatform[];
		formats: APIBetFormat[];
		modes: BetMode[];
	};

	rules: {
		values: (string | number)[];
		min_value: number | null;
		min_wins: number;
		allow: {
			wo: boolean;
			revenge: boolean;
			only_consecutives: boolean;
		};
	};

	time: {
		start: ISODateString | null;
		end: ISODateString | null;
	};

	created_at: ISODateString;
	updated_at: ISODateString;
}

export interface APIGuildEvent2 {
	guild_id: string;
	author_id: string;
	name: string;

	platforms: BetPlatform[];
	formats: APIBetFormat[];
	modes: BetMode[];

	min_value: number | null;
	allowed_values: (string | number)[];
	require: {
		min_wins: number;
		consecutive: boolean;
	};
	allow: {
		walkover: boolean;
		revenge: boolean;
	};

	time: {
		start: ISODateString | null;
		end: ISODateString | null;
	};

	created_at: ISODateString;
	updated_at: ISODateString;
}
