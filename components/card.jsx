import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'

// mrx : style
import styles from '../styles/LandingPage.module.css'

// mrx : material ui ↓
import { Button, Grid, IconButton, TextField } from '@material-ui/core';

// mrx : Card component ↓
export default function Card({ Theme, LinkUrl, Title, Description, }) {
    // mrx : states ↓

    // mrx : functions ↓

    return (
        <>
            <Grid className={styles.main}>
                <h1 style={{ color: Theme ? "white" : "#252525" }} className={styles.title}>
                    {Title}
                </h1>
                <h3 style={{ color: Theme ? "white" : "#252525" }} className={styles.description}>{Description}
                    <a style={{ color: Theme ? "white" : "#252525" }} className={styles.Link} href={LinkUrl}>Docs</a>
                </h3>
            </Grid>
        </>
    )
}

// mrx : Get Values of Props