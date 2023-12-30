import { Link } from "@remix-run/react";
import { memo } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

const Header = memo(() => {
  return (
    <header className="w-full border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="font-semibold text-lg">Rated List</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/new-rate"
              >
                New Rate
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
