import React from 'react';
import TopSongsItem from './TopSongsItem';
import { useSelector } from 'react-redux';
import Style from './TopSongsRow.module.css'

function TopSongs({data}) {
   // console.log(data)
    const loadingState = useSelector((state) => state.data.loadingState);

    const songs = [];
    for (var i = 0; i < 5; i++) {
        if (!data) break;

        songs.push(
            <TopSongsItem
                key={i}
                data={data[i]}

            />
        )
    }

    return (
        <div className={Style.songrow}>
            {loadingState ? <div></div> : <h1 className={Style.topic}>{data?.topic}</h1>}
            <div className={Style.songItem}>{songs}</div>
        </div>
    )
}

export default TopSongs
