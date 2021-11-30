import React from 'react';
import Style from './Login.module.css';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=cea15f2d1f164548b6042a367be00301&response_type=code&redirect_uri=https://sheifunmi-spotify-clone-ewebajo-oluwaseyi.vercel.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Login() {
    return (
        <div class={Style.login}>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={AUTH_URL}>Login</a>
        </div>
    )
}

export default Login
