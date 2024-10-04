import React from "react";

import styles from "./modules/Link.module.css";

export default function Link({nome, url, nomeStyle}) {
    return(
        <a href={url} className={styles[nomeStyle]}>{nome}</a>
    );
}