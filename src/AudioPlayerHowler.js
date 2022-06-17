import React, { useState, useEffect } from "react"
import { getAudioPlayer } from './AudioProvider'

function AudioPlayerHowler(props) {
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        setIsPlaying(false);
    }, [props.searchTextSubmitted]);

    const audioPlayer = props.audioPlayer;
    const canActOnPlayer = isPlaying ? 'Pause' : 'Play';
    return (
        <>
            <p>files to play: {props.mediaFiles}</p>
            <button onClick={(e) => {

                const currentlyPlayingIndex = audioPlayer.findIndex(audio => audio[1] === 1000);
                const indexOfAudioToPlayOrResume = currentlyPlayingIndex === -1 ? 0 : currentlyPlayingIndex;

                console.log('indexOfAudioToPlay:' + indexOfAudioToPlayOrResume);

                if (isPlaying) {
                    audioPlayer[indexOfAudioToPlayOrResume][0].pause();
                    setIsPlaying(false);
                } else {
                    audioPlayer[indexOfAudioToPlayOrResume][0].play();
                    setIsPlaying(true);

                }
            }}>{canActOnPlayer}</button>
        </>)

}

export default AudioPlayerHowler;