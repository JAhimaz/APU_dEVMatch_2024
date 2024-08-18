type ENV_TYPES = "development" | "production";

export const env = "development" as ENV_TYPES;
// export const env = "production" as ENV_TYPES;

export const DATA_API = env === "production" ? "https://unknown.com" : "http://localhost:8080";