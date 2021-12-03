declare namespace NodeJS {
  export interface ProcessEnv {
/**
     * @example
     * ```
    process.env.NODE_ENV === "development"
    ```
     */
    NODE_ENV: "development" | "production" | "testing"
/**
     * @example
     * ```
    process.env.DATABASE_URL
    ```
     */
    DATABASE_URL: string
/**
     * @example
     * ```
    process.env.ACCESS_TOKEN_SECRET
    ```
     */
    ACCESS_TOKEN_SECRET: string
/**
     * @example
     * ```
    process.env.REFRESH_TOKEN_SECRET
    ```
     */
    REFRESH_TOKEN_SECRET: string
/**
     * @example
     * ```
    process.env.REDIS_HOST
    ```
     */
    REDIS_HOST: string
/**
     * @example
     * ```
    process.env.PG_USER
    ```
     */
    PG_USER: string
/**
     * @example
     * ```
    process.env.PG_PASSWORD
    ```
     */
    PG_PASSWORD: string
/**
     * @example
     * ```
    process.env.DB_NAME
    ```
     */
    DB_NAME: string
/**
     * @example
     * ```
    process.env.GMAIL_REFRESH_TOKEN
    ```
     */
    GMAIL_REFRESH_TOKEN: string
/**
     * @example
     * ```
    process.env.GMAIL_EMAIL
    ```
     */
    GMAIL_EMAIL: string
/**
     * @example
     * ```
    process.env.GMAIL_CLIENT_SECRET
    ```
     */
    GMAIL_CLIENT_SECRET: string
/**
     * @example
     * ```
    process.env.GMAIL_CLIENT_ID
    ```
     */
    GMAIL_CLIENT_ID: string
/**
     * @example
     * ```
    process.env.GITHUB_CLIENT_ID
    ```
     */
    GITHUB_CLIENT_ID: string
/**
     * @example
     * ```
    process.env.GITHUB_CLIENT_SECRET
    ```
     */
    GITHUB_CLIENT_SECRET: string
/**
     * @example
     * ```
    process.env.SERVER_URL
    ```
     */
    SERVER_URL: string
/**
     * @example
     * ```
    process.env.AWS_ACCESS_KEY_ID
    ```
     */
    AWS_ACCESS_KEY_ID: string
/**
     * @example
     * ```
    process.env.AWS_SECRET_ACCESS_KEY
    ```
     */
    AWS_SECRET_ACCESS_KEY: string
/**
     * @example
     * ```
    process.env.AWS_ACCOUNT_ID
    ```
     */
    AWS_ACCOUNT_ID: string
/**
     * @example
     * ```
    parseInt(process.env.AGE)
    ```
     */
    AGE: string
  }
}
