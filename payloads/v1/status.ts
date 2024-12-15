import type { APIPayload } from "../../common/v1";

/**
 * APIStatus#status
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export type APIStatusType = "online" | "degraded" | "unknown";
export const APIStatusType = {
	Online: "online",
	Degraded: "degraded",
	Unknown: "unknown",
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export type APIServicesType = "up" | "down";
export const APIServicesType = {
	UP: "up",
	DOWN: "down",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APIStatusServices {
	database: {
		status: APIServicesType;
		ping: number;
	};
	cache: {
		status: APIServicesType;
		ping: number;
	};
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APIStatus {
	status: APIStatus;
	ping: number;
	services: APIStatusServices;
	uptime: number | null;
}

export type APIStatusPayload = APIPayload<APIStatus>;
