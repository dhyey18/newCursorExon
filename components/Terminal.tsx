import React from 'react';
import styles from './Terminal.module.css';

interface TerminalProps {
  children: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ children }) => {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.closeButton}></span>
          <span className={styles.minimizeButton}></span>
          <span className={styles.maximizeButton}></span>
        </div>
        <div className={styles.terminalTitle}>Terminal</div>
      </div>
      <div className={styles.terminalBody}>
        {children}
      </div>
    </div>
  );
}; 