import type { APIPayload } from "../../common/v1";

/**
 * APIStatus#status
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export type APIStatus = "online" | "degraded" | "unknown";
export const APIStatus = {
	Online: "online",
	Degraded: "degraded",
	Unknown: "unknown",
};

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export type APIServicesStatus = "up" | "down";
export const APIServicesStatus = {
	UP: "up",
	DOWN: "down",
} as const;

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APIStatusServices {
	database: {
		status: APIServicesStatus;
		ping: number;
	};
	cache: {
		status: APIServicesStatus;
		ping: number;
	};
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APIStatusInfo {
	status: APIStatus;
	ping: number;
	services: APIStatusServices;
	uptime: number | null;
}

export type APIStatusPayload = APIPayload<APIStatusInfo>;
