import React, {useEffect} from 'react'
import Style from './Dashboard.module.css';
import Home from '../components/Home/Home'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer';
import useAuth from '../useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import { useDispatch } from 'react-redux';
import { dataActions } from '../store/data.slice';
import { audioActions } from '../store/audioSlice'

const spotifyApi = new SpotifyWebApi({
  clientId: "cea15f2d1f164548b6042a367be00301"
})

function Dashboard({code}) {
  const accessToken = useAuth(code);
  //console.log(accessToken)
  const dispatch = useDispatch();
 // const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      dispatch(dataActions.setLoading(true))
      if (!accessToken) return
      await spotifyApi.setAccessToken(accessToken);
      await spotifyApi.getPlaylist('37i9dQZF1DX4SBhb3fqCJd')
      .then(res => {
        const data = res.body
      // console.log(data)
        data && dispatch(dataActions.storeData(data))
        data && dispatch(audioActions.currentMusic(data.tracks.items[0].track))
        data && dispatch(dataActions.setLoading(false))
      })
    }
    fetchData()
  }, [accessToken, dispatch]);

 

    return (
        <div className={Style.player}>
          <div className={Style.player__body}>
            <Sidebar className={Style.sidebar}/>
            <Home accessToken={accessToken}/>
          </div>
          <Footer/>
      </div>
    )
}

export default Dashboard
