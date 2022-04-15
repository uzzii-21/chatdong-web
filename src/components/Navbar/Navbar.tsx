import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  SaveIcon,
  SearchIcon,
  SignUpIcon,
  LogInIcon,
  AddIcon,
  UserIcon
} from '../../assets/icons';

const Navbar: FC = () => (
  <header className="flex items-center justify-between py-4">
         <h1 className="font-bold text-xl">PhotoGallery</h1>
    <nav>
      <ul className="flex items-center">
        <li className="mx-2">
          <NavLink to="/" >
          <HomeIcon className="w-6 h-6" />
        </NavLink>
        </li>
        <li className="mx-2">
          <NavLink to="/discover" >
          <SearchIcon className="w-6 h-6" />
        </NavLink>
        </li>
        <li className="mx-2">
          <NavLink to="/saved" >
          <SaveIcon className="w-6 h-6" />
        </NavLink>
        </li>
      </ul>
    </nav>
    <div className="flex items-center">
      {

        true ?
    <><NavLink to="sign-in"
            className={({ isActive }: any) => isActive ? 'active-btn' : 'btn'}
          >
            <LogInIcon className="w-6 h-6" />
            <span className="block text-sm font-semibold ml-2 hidden md:block">Log In</span>
          </NavLink><NavLink to="sign-up"
            className={({ isActive }: any) => isActive ? 'active-btn ml-2' : 'btn ml-2'}
          >
              <SignUpIcon className="w-6 h-6" />
              <span className="block text-sm font-semibold ml-2 hidden md:block">Sign Up</span>
            </NavLink></> : 

      <><button
            type="button"
            title="Create Post"
            className='btn'
          >
            <AddIcon className="w-6 h-6" />
            <span className="block text-sm font-semibold ml-2 hidden md:block">Create Post</span>
          </button><NavLink to="/profile"
            className="ml-2 btn p-3"
          >
              <UserIcon className="w-6 h-6" />
            </NavLink></>
      }
    </div>
  </header>
);

export default Navbar;
