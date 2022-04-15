import { FC } from 'react';
import {
  HomeIcon,
  SaveIcon,
  SearchIcon,
  AddIcon,
  UserIcon
} from '../../assets/icons';

const Navbar: FC = () => (
  <header className="flex items-center justify-between py-4">
        <h1 className="font-bold text-xl">PhotoGallery</h1>
    <nav>
      <ul className="flex items-center">
        <li className="mx-2">
          <HomeIcon className="w-6 h-6" />
        </li>
        <li className="mx-2">
          <SearchIcon className="w-6 h-6" />
        </li>
        <li className="mx-2">
          <SaveIcon className="w-6 h-6" />
        </li>
      </ul>
    </nav>
    <div className="flex items-center">
      <button
        type="button"
        title="Start buying"
        className="flex items-center p-3 md:px-6 text-center rounded-full transition border border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white"
      >
        <AddIcon className="w-6 h-6" />
        <span className="block text-sm font-semibold ml-2 hidden md:block">Create Post</span>
      </button>
      <button
        type="button"
        className="ml-2 flex items-center p-3 rounded-full transition border border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white"
      >
        <UserIcon className="w-6 h-6" />
      </button>
    </div>
  </header>
);

export default Navbar;
