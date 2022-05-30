import { Link } from "@remix-run/react";
import { Fragment } from "react"

export default function Index() {
  return <Fragment>
    <div>
      <h1>Welcome to Remix</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  </Fragment>;
}
