import React from 'react';
import styles from './header.module.css';
import MenuIcon from '@/components/Icons/menu';
import CloseIcon from '@/components/Icons/close';
const Menubar = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div id={styles.menu} className="hidden max-tabletL:block z-10">
      <div>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default Menubar;
