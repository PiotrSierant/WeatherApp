import React from 'react';
import {InputSearch} from "./InputSearch";
import styles from './Search.module.scss';
export function Search() {

    return <section className={styles.search}>
        <InputSearch />
    </section>
}