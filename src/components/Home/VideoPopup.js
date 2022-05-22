import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
 
 
        <div className="play_video">
        <ModalVideo
            channel="youtube"
            isOpen={modalStatus}
            videoId="C_ne1TBEOEc"
            onClose={() => isOpen(false)}
        />
        <button onClick={() => isOpen(true)} className="play_btn">
            <i className="fa fa-play"></i>
        </button>
        </div>
 
  );
};

export default VideoPopup;
