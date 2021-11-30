import React from 'react'
import Style from './TrackSearchResult.module.css';

function TrackSearchResult({track, chooseTrack}) {
    //console.log(track)
    function handlePlay() {
       // console.log(track)
        chooseTrack(track)
    }
    return (
        <div className={Style.trackSearch} onClick={handlePlay}>
            <img src={track.albumUrl.url} style={{height: "64px", width: "64px"}} alt=""/>
            <div style={{marginLeft: '10px'}}>
                <div className={Style.title}>{track.title}</div>
                <div className={Style.artist}>{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult
