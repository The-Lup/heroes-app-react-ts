import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { Link, useLocation } from 'react-router';

import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuList } from '../navigation-menu';

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive('/search') && 'bg-slate-200',
              'p-2 rounded-md'
            )}
          >
            <Link to="/search">Search superheroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
