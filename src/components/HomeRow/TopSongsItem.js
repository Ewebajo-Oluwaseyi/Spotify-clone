import React from 'react'
import Style from './TopSongsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { audioActions } from '../../store/audioSlice'

function TopSongsItem({data}) {
    const loadingState = useSelector((state) => state.data.loadiingState);
    const state = useSelector((state) => state.data.apiData)
    //const musicState = useSelector((state) => state.audio.audioData);
    const dispatch = useDispatch();
    const playHandle= () => {
      //console.log(data)
     // for (var i = 0; i < 5; i++)
     // console.log(state.tracks.items)
     // const arrayRes = Object.values(state.tracks.items.map((ev, key) => {return ev.track.name}))
      const currentSong = state.tracks.items.find((ev) => ev.track.name === data.track.name);
      currentSong && dispatch(audioActions.currentMusic(currentSong.track))
     // console.log(currentSong.track)
    };

    return (
        <div className={Style.TopSongItem} onClick={playHandle}>
            {!loadingState && (
                <>
                  <div className={Style.TopSongImg}>
                    <img src={data.track.album.images[0].url} alt=""/>
                  </div>
                  <div className={Style.TopSongTitle}>
                    <h3>{data.track.name}</h3>
                    <span>{data.track.artists[0].name}</span>
                  </div>
                  <div className={Style.TopSongPlay}>
                    <span>
                      <i className="fas fa-play"></i>
                    </span>
                  </div>
                </>
            )}
        </div>
    )
}

export default TopSongsItem
