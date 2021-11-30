import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
    name: "audio",
    initialState: {
        audioData: {
            playing: true
        }
    },
    reducers: {
        currentMusic(state, action) {
           // console.log(action.payload)
            state.audioData = {
                ...action.payload,
                playing: !state.audioData.playing,
            };
        },
        setPlaying(state) {
            state.audioData.playing = !state.audioData.playing
        },
        clearMusic(state) {
            state.audioData = {
                playing: true,
                url: "",
                currentSongPic: "",
                currentSongTitle: "",
                currentSongArtist: ""
            }
        }
    }
});

export const audioActions = audioSlice.actions;

export default audioSlice;