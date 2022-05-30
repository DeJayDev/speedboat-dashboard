import { createCookieSessionStorage } from "@remix-run/cloudflare";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax", // CSRF bullshit
    path: "/", // The cookie works in all routes
    httpOnly: true, 
    secrets: [process.env.SPEEDBOAT_SECRET ?? "NOT_SO_SECRET"],
    secure: process.env.NODE_ENV === "production",
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;