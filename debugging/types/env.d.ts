declare namespace NodeJS {
  export interface ProcessEnv {
/**
     * ###  NODE_ENV
     * @example
     * ```
    process.env.NODE_ENV === "development"
    ```
     */
    NODE_ENV: "development" | "production" | "testing"
/**
     * ###  DATABASE_URL
     * @example
     * ```
    process.env.DATABASE_URL
    ```
     */
    DATABASE_URL: string
/**
     * ###  ACCESS_TOKEN_SECRET
     * @example
     * ```
    process.env.ACCESS_TOKEN_SECRET
    ```
     */
    ACCESS_TOKEN_SECRET: string
/**
     * ###  REFRESH_TOKEN_SECRET
     * @example
     * ```
    process.env.REFRESH_TOKEN_SECRET
    ```
     */
    REFRESH_TOKEN_SECRET: string
/**
     * ###  REDIS_HOST
     * @example
     * ```
    process.env.REDIS_HOST
    ```
     */
    REDIS_HOST: string
/**
     * ###  PG_USER
     * @example
     * ```
    process.env.PG_USER
    ```
     */
    PG_USER: string
/**
     * ###  PG_PASSWORD
     * @example
     * ```
    process.env.PG_PASSWORD
    ```
     */
    PG_PASSWORD: string
/**
     * ###  DB_NAME
     * @example
     * ```
    process.env.DB_NAME
    ```
     */
    DB_NAME: string
/**
     * ###  GMAIL_REFRESH_TOKEN
     * @example
     * ```
    process.env.GMAIL_REFRESH_TOKEN
    ```
     */
    GMAIL_REFRESH_TOKEN: string
/**
     * ###  GMAIL_EMAIL
     * @example
     * ```
    process.env.GMAIL_EMAIL
    ```
     */
    GMAIL_EMAIL: string
/**
     * ###  GMAIL_CLIENT_SECRET
     * @example
     * ```
    process.env.GMAIL_CLIENT_SECRET
    ```
     */
    GMAIL_CLIENT_SECRET: string
/**
     * ###  GMAIL_CLIENT_ID
     * @example
     * ```
    process.env.GMAIL_CLIENT_ID
    ```
     */
    GMAIL_CLIENT_ID: string
/**
     * ###  GITHUB_CLIENT_ID
     * @example
     * ```
    process.env.GITHUB_CLIENT_ID
    ```
     */
    GITHUB_CLIENT_ID: string
/**
     * ###  GITHUB_CLIENT_SECRET
     * @example
     * ```
    process.env.GITHUB_CLIENT_SECRET
    ```
     */
    GITHUB_CLIENT_SECRET: string
/**
     * ###  SERVER_URL
     * @example
     * ```
    process.env.SERVER_URL
    ```
     */
    SERVER_URL: string
/**
     * ###  AWS_ACCESS_KEY_ID
     * @example
     * ```
    process.env.AWS_ACCESS_KEY_ID
    ```
     */
    AWS_ACCESS_KEY_ID: string
/**
     * ###  AWS_SECRET_ACCESS_KEY
     * @example
     * ```
    process.env.AWS_SECRET_ACCESS_KEY
    ```
     */
    AWS_SECRET_ACCESS_KEY: string
/**
     * ###  AWS_ACCOUNT_ID
     * @example
     * ```
    process.env.AWS_ACCOUNT_ID
    ```
     */
    AWS_ACCOUNT_ID: string
/**
     * ###  AGE
     * @example
     * ```
    parseInt(process.env.AGE)
    ```
     */
    AGE: string
  }
}
