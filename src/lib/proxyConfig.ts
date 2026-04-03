const localhostProxy = "http://localhost:4002";

export const PROXY_BASE =
  import.meta.env.VITE_PROXY_URL ||
  (import.meta.env.PROD ? window.location.origin : localhostProxy);

export const WS_BASE =
  import.meta.env.VITE_WS_URL ||
  (import.meta.env.VITE_PROXY_URL
    ? import.meta.env.VITE_PROXY_URL.replace(/^http/, "ws")
    : `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`);
