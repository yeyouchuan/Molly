import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <div className="flex gap-4 px-5 py-4 text-sm text-neutral-400">
      <NavLink>Chester How</NavLink>
      <NavLink type="projects">Projects</NavLink>
      <NavLink type="writing">Writing</NavLink>
      <NavLink type="reading">Reading</NavLink>
      <NavLink type="climbing">Climbing</NavLink>
      <NavLink type="plants">Plants</NavLink>
      <NavLink type="coffee">Coffee</NavLink>
    </div>
  );
}
