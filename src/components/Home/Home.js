import React, {useEffect, useState} from 'react'
import Style from './Home.module.css';
import Nav from '../Nav/Nav';
import TopSongs from '../HomeRow/TopSongs';
import { useSelector } from 'react-redux';
import Audio from '../Audio/Audio';


function Home({accessToken}) {
    const [greetings, setGreeting] = useState('');
    const topSongsData = useSelector((state) => state.data);
    //console.log(topSongsData)
    //console.log(topSongsData.apiData.length)
    const arrayRes = Object.values(topSongsData.apiData.length !== 0 && topSongsData.apiData.tracks.items).slice(0, 5);
    const secondArrayRes = Object.values(topSongsData.apiData.length !== 0 && topSongsData.apiData.tracks.items).slice(5, 10)
    const arrayData = { ...arrayRes, topic: "Top Songs" };
   // console.log(arrayRes)

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if (hour < 12) {
            return setGreeting (<div className={Style.greetings}>Good Morning</div>)
        }
        if (hour >= 12 && hour <17) {
            return setGreeting (<div className={Style.greetings}>Good Afternoon</div>)
        } else {
            return setGreeting(<div className={Style.greetings}>Good Evening</div>)
        }
    }, [])

    return (
        <div className={Style.home}>
            <Nav accessToken={accessToken}/>
            <div className={Style.greetings}>{greetings}</div>
            {topSongsData.apiData.length !== 0 && <TopSongs data={arrayData}/>}
            {topSongsData.apiData.length !== 0 && <TopSongs data={secondArrayRes}/>}
            <Audio accessToken={accessToken}/>
        </div>
    )
}

export default Home
