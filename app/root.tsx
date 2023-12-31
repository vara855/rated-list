import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import tailwindStyles from "./tailwind.css?url";
import Page from "~/components/page";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Page>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Page>
      </body>
    </html>
  );
}
