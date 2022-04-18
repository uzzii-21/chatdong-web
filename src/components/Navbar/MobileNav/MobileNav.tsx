import { NavLink } from 'react-router-dom';
import {
  AddIcon,
  HomeIcon,
  SaveIcon,
  SearchIcon,
  UserIcon
} from '../../../assets/icons';

const MobileNav = () => (
  <>
    <header className="py-4">
      <h1 className="font-bold text-xl">PhotoGallery</h1>
    </header>
    {false ? (
      <nav className="fixed bottom-0 left-0 right-0 p-4">
        <ul className="flex items-center justify-between">
          <li className="mx-4">
            <NavLink
              className={({ isActive }: any) =>
                isActive ? 'active-link' : 'link'
              }
              to="/"
            >
              <HomeIcon className="w-6 h-6" />
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive }: any) =>
                isActive ? 'active-link' : 'link'
              }
              to="/discover"
            >
              <SearchIcon className="w-6 h-6" />
            </NavLink>
          </li>
          <li className="mx-4">
            <button type="button" className="link focus:text-gray-900">
              <AddIcon className="w-6 h-6" />
            </button>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive }: any) =>
                isActive ? 'active-link' : 'link'
              }
              to="/saved"
            >
              <SaveIcon className="w-6 h-6" />
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive }: any) =>
                isActive ? 'active-link' : 'link'
              }
              to="/profile"
            >
              <UserIcon className="w-6 h-6" />
            </NavLink>
          </li>
        </ul>
      </nav>
    ) : null}
  </>
);

export default MobileNav;
