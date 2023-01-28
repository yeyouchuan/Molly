import classNames from 'classnames';

import useScrollPosition from '@/lib/hooks/useScrollPosition';

import { NavLink } from './NavLink';
import { NavTabGroup } from './NavTabGroup';

export function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <nav className="sticky top-0 isolate z-10 flex items-center justify-between py-4 px-1">
      <NavTabGroup />

      <div
        className={classNames(
          'flex transition-opacity',
          scrollPosition > 20 && 'opacity-0'
        )}
      >
        <NavLink href="https://github.com/chesterhow">GitHub</NavLink>
        <NavLink href="https://twitter.com/itsnotchester">Twitter</NavLink>
        <NavLink href="https://read.cv/chesterhow">CV</NavLink>
      </div>
    </nav>
  );
}
