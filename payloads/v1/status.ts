/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/status
 */
export type APIStatusType = "healthy" | "degraded" | "unknown";
export const APIStatusType = {
	Healthy: "healthy",
	Degraded: "degraded",
	Unknown: "unknown",
};

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/status
 */
export type APIServicesType = "up" | "down" | "unknown";
export const APIServicesType = {
	UP: "up",
	DOWN: "down",
	Unknown: "unknown",
} as const;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/status
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
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/status
 */
export interface APIStatus {
	status: APIStatusType;
	ping: number;
	services: APIStatusServices;
	uptime: number | null;
}
