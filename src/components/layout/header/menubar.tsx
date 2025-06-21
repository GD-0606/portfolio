import React from 'react';
import styles from './header.module.css';
const Menubar = () => {
  return (
    <div id="menu" className="hidden max-tabletL:block">
      <div>
        <button>
          <div className={`${styles.ham_box} border`}>
            <div className={`${styles.ham_box_inner}`}></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menubar;
