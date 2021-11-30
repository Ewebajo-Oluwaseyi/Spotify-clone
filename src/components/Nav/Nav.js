import React, {useEffect, useState} from 'react'
import Style from './Nav.module.css';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
import { useDispatch } from 'react-redux';
import { audioActions } from '../../store/audioSlice';


const spotifyApi = new SpotifyWebApi({
    clientId: "cea15f2d1f164548b6042a367be00301"
  })

function Nav({accessToken}) {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    //const [playingTrack, setPlayingTrack] = useState()
    const dispatch = useDispatch();

    function chooseTrack(track) {
        //console.log(track)
        dispatch(audioActions.currentMusic(track))
       // setPlayingTrack(track)
        setSearch('')
    }
   // console.log(searchResults)
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.setAccessToken(accessToken);
       spotifyApi.searchTracks(search).then(res => {
           if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
               const smallestImages = track.album.images.reduce(
                   (smallest, image) => {
                       if (image.height < smallest.height) return image
                       return smallest
                   }, track.album.images[0]
               )
               return {
                   artist: track.artists[0].name,
                   title: track.name,
                   uri: track.uri,
                   albumUrl: smallestImages
               }
           }))
        });
            return () => cancel = true
      }, [search, accessToken]);

    return (
        <div className={Style.Nav}>
            <div className={Style.NavArrow}>
                <div>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className={Style.search}>
            <form className={Style.NavSearch}>
                <span>
                    <i className="fas fa-search"></i>
                </span>
                <input
                    type="text"
                    placeholder="search songs"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <div className={searchResults.length > 0 && Style.result}>
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                )).slice(0, 5)}
            </div>
            </div>

        </div>
    )
}

export default Nav
