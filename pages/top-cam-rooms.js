import React from "react";
import { Helmet } from "react-helmet";
const TopCamRooms = ({ isContentWide }) => {
  return (
    <div className="TopCamRooms">
      <Helmet>
        <title>Top Cam Rooms | Wettify</title>
        <meta property="og:title" content="Cam Teens | Wettify" />
        <meta
          property="og:description"
          content="Explore live teen sex cams with the hottest cam teens. Join teencams for free and enjoy real-time chat with beautiful young models on live sex cams now!"
        />
        <meta
          name="description"
          content="Explore live teen sex cams with the hottest cam teens. Join teencams for free and enjoy real-time chat with beautiful young models on live sex cams now!"
        ></meta>
      </Helmet>
      <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
      <iframe src="https://chaturbate.com/in/?tour=x1Rd&campaign=ccOiu&track=default&c=15&p=1&gender=f&tag=teen" className="rubateFeedIframe"></iframe>
      </div>
    </div>
  );
};

export default TopCamRooms;
