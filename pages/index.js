import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

// mrx : cookie ↓
import Cookies from 'js-cookie';

// mrx : styles ↓
import styles from '../styles/LandingPage.module.css'

// mrx : material ui ↓
import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import LightIcon from '@mui/icons-material/Light';
import NightlightIcon from '@mui/icons-material/Nightlight';

// mrx : Components ↓
import Card from '../components/card';

// mrx : api links ↓
import { GET_USER_DETAIL } from '../pages/api/index';

// mrx : api ↓
import { PostUrl, GetUrl, GetAuthUrl } from '../pages/api/config';

// mrx : context ↓
import { Context } from "../context/index";

// mrx : Landing page ↓
export default function Home() {
  // mrx : states ↓
  const [Theme, setTheme] = useState(false);

  // mrx : ↓ --------------------- functions --------------------- ↓

  // mrx : get User info from api link
  const handleGetUserInfo = () => {
    GetAuthUrl(GET_USER_DETAIL).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          setTheme(res?.data?.name);
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
  }

  // mrx : chnage Theme
  const handleChangeTheme = () => {
    if (Theme === false) {
      document.body.style.backgroundColor = "#252525";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }

  useEffect(() => {
    // mrx : handle change theme
    handleChangeTheme()
  }, [Theme])

  useEffect(() => {
    // Get user info from api link when page ↓
    // handleGetUserInfo()
  }, [])

  return (
    <>
      <IconButton onClick={() => handleChangeTheme()}>
        {
          Theme ? (
            <>
              <NightlightIcon onClick={() => setTheme(false)} style={{ color: "#252525" }} />
            </>
          ) : (
            <LightIcon onClick={() => setTheme(true)} style={{ color: "white" }} />
          )
        }
      </IconButton>
      <Card
        Theme={Theme}
        LinkUrl="#"
        Title="Next.js sample source code"
        Description="Press Link for documentation"
      />
      <h6 className={styles.description}><span style={{ color: Theme ? "#252525" : "white" }} className={styles.author}>Create by Alireza Asakri</span></h6>
    </>
  )
}
