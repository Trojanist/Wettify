import React from "react";
import Head from "next/head";
const RandomCamRoom = ({ isContentWide }) => {
  return (
    <div className="RandomCamRoom">
      <Head>
        <title>Random Cam Room | Wettify</title>
        <meta property="title" content="Cam Teens | Wettify" />
        <meta property="og:title" content="Cam Teens | Wettify" />
        <meta
          property="og:description"
          content="Explore live teen sex cams with the hottest cam teens. Join teencams for free and enjoy real-time chat with beautiful young models on live sex cams now!"
        />
        <meta
          name="description"
          content="Explore live teen sex cams with the hottest cam teens. Join teencams for free and enjoy real-time chat with beautiful young models on live sex cams now!"
        ></meta>
      </Head>
      <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
      <iframe src="https://cbxyz.com/in/?tour=gLDS&campaign=ccOiu&track=embed&signup_notice=1&disable_sound=1&mobileRedirect=never" width="20%" height="500px" frameborder="0" className="RandomCamIframe"></iframe>
      </div>
    </div>
  );
};

export default RandomCamRoom;
