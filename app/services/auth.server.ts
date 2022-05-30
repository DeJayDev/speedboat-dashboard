import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import User from "~/models/user";
import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
    new OAuth2Strategy(
        {
            authorizationURL: "https://discord.com/oauth2/authorize",
            tokenURL: "https://discord.com/api/oauth2/token",
            clientID: process.env.SPEEDBOAT_CLIENT_ID ?? '',
            clientSecret: process.env.SPEEDBOAT_CLIENT_SECRET ?? '',
            callbackURL: "https://localhost:8686/api/auth/discord/callback",
        },
        async ({ accessToken, refreshToken, extraParams, profile, context }) => {
            // here you can use the params above to get the user and return it
            // what you do inside this and how you find the user is up to you
            // TODO: Get user from Speedboat API and return it here.
            console.log(profile);
            return new User();
            /*return await getUser(
              accessToken,
              refreshToken,
              extraParams,
              profile,
              context
            );*/
        },
    ),
    "discord"
);
