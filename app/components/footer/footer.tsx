import { Link } from "@remix-run/react";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="border-t text-accent-foreground">
      {/* copyright */}
      <p className="text-center flex py-2 gap-3 flex-wrap items-center justify-center">
        <span>&copy; {new Date().getFullYear()} Valerii N.</span>
        <span>·</span>
        <Link
          to="https://github.com/vara855/rated-list"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </Link>
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
