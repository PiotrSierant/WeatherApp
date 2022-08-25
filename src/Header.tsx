import React from 'react';
import styles from "./Header.module.scss";
import {CurrentlyTime} from "./Componets/Header/CurrentlyTime";
import {Logo} from "./Componets/Header/Logo";
export function Header() {
    return <header className={styles.header}>
        <Logo />
        <CurrentlyTime />
    </header>
}