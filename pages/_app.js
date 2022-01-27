import React, { useContext, useEffect, useState } from 'react';
import Document, { Head, Main, NextScript, meta } from 'next/document'

// mrx : material ui
import { ThemeProvider } from "@material-ui/styles";

// mrx : context
import ContextProvider from '../context/index';

// mrx : cookie
import Cookies from 'js-cookie';

// mrx : styles
import '../styles/globals.css'

// mrx : material ui
import { Button, Grid, IconButton } from '@material-ui/core';

// alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Example Title</title>
      <ToastContainer />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp

// mrx : you must enter a title in here ( not in documnet
// mrx : ContextProvider is our context ( global states ) 