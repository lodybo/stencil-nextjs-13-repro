"use client";

import { MyButton } from 'component-lib-react';
import styles from './ButtonRow.module.css';

export default () => (
  <ul className={styles.row}>
    <li><MyButton>Click me!</MyButton></li>
    <li><MyButton primary>Click me!</MyButton></li>
  </ul>
);
