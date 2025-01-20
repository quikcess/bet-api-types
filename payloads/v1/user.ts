/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserWallet {
  credits: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserScores {
  wins: number;
  loses: number;
  consecutives: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUserNotifications {
  events: number;
  waiting_bets: number;
}

/**
 * @see https://docs.quikcess.com/bet/api-reference/endpoint/users
 */
export interface APIUser {
  user_id: string;
  guild_id: string;
  wallet: APIUserWallet;
  scores: APIUserScores;
}