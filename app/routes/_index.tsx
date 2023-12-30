import type { MetaFunction } from "@remix-run/node";
import H1 from "~/components/ui/h1";

export const meta: MetaFunction = () => {
  return [
    { title: "Rated List" },
    { name: "description", content: "Welcome to Rated list App" },
  ];
};

export default function Index() {
  return <H1>Index</H1>;
}
