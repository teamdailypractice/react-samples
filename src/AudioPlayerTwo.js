import React,{useState} from "react"
import { useAudioPlayer } from "react-use-audio-player"

const AudioPlayerTwo = ( props ) => {

    const [songIndex, setSongIndex] = useState(0)

    console.log(props);

    // if(props.isNewSearchResult === true && songIndex > 0) {
    //     setSongIndex(0)
    // }

    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: props.mediaFiles[songIndex],
        format: "mp3",
        autoplay: true,
        onend: () =>  {
            console.log("ended - " + songIndex)
            if (songIndex < props.mediaFiles.length) {
                setSongIndex(songIndex + 1)
            }
        }
    })

    if (!ready && !loading) return <div>No audio to play</div>
    if (loading) return <div>Loading audio</div>

    return (
        <div>
            <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
        </div>
    )
}

export default AudioPlayerTwo;