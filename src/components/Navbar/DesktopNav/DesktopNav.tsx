import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  SaveIcon,
  SearchIcon,
  SignUpIcon,
  LogInIcon,
  AddIcon,
  UserIcon
} from '../../../assets/icons';

const DesktopNav = () => (
  <header className="flex items-center justify-between py-4">
    <h1 className="font-bold text-xl">PhotoGallery</h1>

    {false ? (
      <>
        <nav>
          <ul className="flex items-center">
            <li className="mx-4">
              <NavLink
                className={({ isActive }: any) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/"
              >
                <HomeIcon className="w-6 h-6" />
                <span className="font-semibold ml-2">Home</span>
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
                <span className="font-semibold ml-2">Search</span>
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                className={({ isActive }: any) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/saved"
              >
                <SaveIcon className="w-6 h-6" />
                <span className="font-semibold ml-2">Saved</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button type="button" title="Create Post" className="btn">
            <AddIcon className="w-6 h-6" />
            <span className="block text-sm font-semibold ml-2 hidden md:block">
              Create Post
            </span>
          </button>
          <NavLink
            to="/profile"
            className={({ isActive }: any) =>
              isActive ? 'active-btn ml-2 p-3' : 'btn ml-2 p-3'
            }
          >
            <UserIcon className="w-6 h-6" />
          </NavLink>
        </div>
      </>
    ) : (
      <div className="flex items-center">
        <NavLink
          to="sign-in"
          className={({ isActive }: any) => (isActive ? 'active-btn' : 'btn')}
        >
          <LogInIcon className="w-6 h-6" />
          <span className="text-sm font-semibold ml-2">Log In</span>
        </NavLink>
        <NavLink
          to="sign-up"
          className={({ isActive }: any) =>
            isActive ? 'active-btn ml-2' : 'btn ml-2'
          }
        >
          <SignUpIcon className="w-6 h-6" />
          <span className="text-sm font-semibold ml-2">Sign Up</span>
        </NavLink>
      </div>
    )}
  </header>
);

export default DesktopNav;
