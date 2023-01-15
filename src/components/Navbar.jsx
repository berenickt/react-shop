import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const handleDarkTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="flex justify-between fixed top-0 left-0 right-0 z-50 h-20 bg-white   p-2 dark:bg-black dark:text-white dark:border-gray-800">
      <Link to="/" className="flex items-center text-3xl text-brand">
        <h1>쇼오핑</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <button type="button" onClick={handleDarkTheme}>
          {theme === 'dark' ? (
            <HiMoon className="w-5 h-5 text-yellow-400 " />
          ) : (
            <HiSun className="w-5 h-5 text-red-600" />
          )}
        </button>
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
