import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export let action: ActionFunction = async ({request}) => {
    return await authenticator.authenticate("discord", request, {
        successRedirect: "/home",
        failureRedirect: "/login",
    })
}

export let loader: LoaderFunction = async ({request}) => {
    return await authenticator.isAuthenticated(request, {
        successRedirect: "/home",
    })
}