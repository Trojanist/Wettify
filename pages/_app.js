import Head from "next/head";import{useState,useEffect}from "react";import Navbar from "../components/Navbar";import CategoriesBar from "../components/CategoriesBar";import "../styles/global.css";import{SpeedInsights}from "@vercel/speed-insights/next";function MyApp({Component,pageProps}){const[isCategoriesBarVisible,setCategoriesBarVisible]=useState(!0);useEffect(()=>{const handleResize=()=>{if(window.innerWidth<=850){setCategoriesBarVisible(!1)}else{setCategoriesBarVisible(!0)}};document.getElementById("__next").id="wettify-wrapper";handleResize();window.addEventListener("resize",handleResize);return()=>{window.removeEventListener("resize",handleResize)}},[]);const toggleCategoriesBar=()=>{setCategoriesBarVisible(!isCategoriesBarVisible)};return(<><Head><script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-V0JVFZKP0J"></script><script
  dangerouslySetInnerHTML={{__html:`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-V0JVFZKP0J');
              `,}}/><meta name="robots" content="index, follow"/></Head><Navbar toggleCategoriesBar={toggleCategoriesBar}/><SpeedInsights/><CategoriesBar isVisible={isCategoriesBarVisible}/><Component{...pageProps}isContentWide={!isCategoriesBarVisible}/></>)}
  export default MyApp