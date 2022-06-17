import React, { useState } from 'react';

function SearchBox(props) {

    const [searchText, setSearchText] = useState('');

    const onTextChange = (e) => {
        console.log(e);
        setSearchText(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchText.length === 0) {
            return;
        }

        console.log('props.audioPlayer - ' + props.audioPlayer);
        if (props.audioPlayer !== null) {
            const audioPlayer = props.audioPlayer;
            const currentlyPlayingIndex = audioPlayer.findIndex(audio => audio[1] === 1000);
            const indexOfAudioToPlayOrResume = currentlyPlayingIndex === -1 ? 0 : currentlyPlayingIndex;
            if (currentlyPlayingIndex >= 0) {
                console.log('stop currently running')
                audioPlayer[currentlyPlayingIndex][0].pause();
            }
            for (let index = 0; index < audioPlayer.length; index++) {
                console.log('cleaning up all players - ' + index)
                audioPlayer[index] = undefined;
            }

        }


        props.setSearchTextSubmitted(searchText);
        setSearchText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchText} onChange={onTextChange} />
                <span>&nbsp;&nbsp;</span>
                {/* <button onClick={() => {
                    if (searchText.length === 0) {
                        return;
                    }
                    console.log(searchText);
                    props.setSearchTextSubmitted(searchText);
                    setSearchText('');
                }}>Search</button> */}
                <button className="form-field" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBox;