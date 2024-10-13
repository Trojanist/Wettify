import React from "react";
import { Helmet } from "react-helmet";

const FreeRooms = ({ isContentWide }) => {
  return (
    <div className="FreeRooms">
      <Helmet>
        <title>Free Rooms | Wettify</title>
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
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
       <iframe src="https://chaturbate.com/in/?tour=x1Rd&campaign=ccOiu&track=default&c=200&p=1&gender=f&tag=skinny" className="rubateFeedIframe"></iframe>
        <p className="PageTextContent">
        </p>
      </div>
    </div>
  );
};

export default FreeRooms;
