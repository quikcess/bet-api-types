import type { APIPayload, APIStatus } from "../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/status
 */
export type RESTGetAPIStatusResponse = APIPayload<APIStatus>;
