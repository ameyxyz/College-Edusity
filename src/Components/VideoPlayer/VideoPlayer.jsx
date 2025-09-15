import React from 'react'
import './VideoPlayer.css'
import A_video from '../../assets/A-video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  if (!playState) return null; // 🔑 Hide when playState = false

  return (
    <div className="video-overlay" onClick={() => setPlayState(false)}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <video src={A_video} autoPlay controls />
        <button className="close-btn" onClick={() => setPlayState(false)}>✖</button>
      </div>
    </div>
  )
}

export default VideoPlayer
