import type { APIPayload } from "../../common/v1";

/**
 * APIStatus#status
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export enum APIStatus {
  Healthy = "healthy",
  Degraded = "degraded",
}

export enum ServiceStatus {
  UP = "UP",
  DOWN = "DOWN",
}

export interface APIStatusServices {
  database: ServiceStatus;
  cache: ServiceStatus;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/status
 */
export interface APIStatusInfo {
  status: APIStatus;
  ping: string;
  services: APIStatusServices;
  uptime: number | null; // Pode ser null quando o servidor não reporta uptime.
}

export type APIStatusPayload = APIPayload<APIStatusInfo>;
