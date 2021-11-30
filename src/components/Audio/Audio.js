import React, {useState, useEffect} from 'react'
import Style from './Audio.module.css';
import { useSelector } from 'react-redux';
import SpotifyWebPlayer from "react-spotify-web-playback"

function Audio({accessToken}) {
    const loadingState = useSelector((state)=> state.data.loadingState);
    const musicState = useSelector((state) => state.audio.audioData);
    const [play, setPlay] = useState(false)
    //console.log(musicState)

    useEffect(() =>
      setPlay(true)
    , [musicState.uri]);


    return (
        <>
           {!loadingState && (
               <div className={Style.audio}>
                  <div className={Style.player}>
                    {/*<div className={Style.pic}>
                      <div className={Style.Img}>
                        <img src={music.album.images[0].url} alt=""/>
                      </div>
                      <div className={Style.info}>
                        <div className={Style.name}>{music.name}</div>
                        <div className={Style.artist}>{music.artists[0].name}</div>
                      </div>
           </div>*/}

                    <div className={Style.btns}>
                      <SpotifyWebPlayer
                        token={accessToken}
                        showSaveIcon
                        play={play}
                        callback={state => {
                          if (!state.isPlaying) setPlay(false)
                        }}
                        uris={musicState.uri ? [musicState.uri] : []}
                        styles={{
                          bgColor: '#181818',
                          color: '#fff',
                          activeColor: '#fff'
                        }}
                      />
                      {/*<div className={Style["play-pause"]} onClick={toggle}>
                        {!playing ? (
                            <i
                              className="fas fa-play-circle fa-2x"
                              style={
                                {
                                  cursor: "not-allowed",
                                  pointerEvents: "none",
                                  color: "#777676",
                                }
                              }
                            ></i>
                        ) : (
                            <i
                            className="fas fa-pause-circle fa-2x"
                            style={
                                {
                                  cursor: "not-allowed",
                                  pointerEvents: "none",
                                  color: "#777676",
                                }
                              }
                            ></i>
                        )}
                      </div>
                      <div className={Style.seekSlider}>
                        <span>{calculateTime()}</span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={progress}
                          onChange={(ev) => seekSlider(ev.target.value)}
                        ></input>
                            </div>*/}
                    </div>
                  </div>
               </div>
           )}
        </>
    )
}

export default Audio
