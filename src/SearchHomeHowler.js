import React, { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Header from './Header';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import searchThirukkural from './ThirukkuralSearch';

import AudioPlayerHowler from './AudioPlayerHowler';
import getAudioPlayer from './AudioProvider'

function SearchHomeHowler() {


    const [searchTextSubmitted, setSearchTextSubmitted] = useState('0000');


    useEffect(() => {
        console.log('SearchHomeHowler.js - Effect' + searchTextSubmitted)
    }, [searchTextSubmitted])

    let searchResult = [];

    let component = null;
    if (searchTextSubmitted !== '0000') {
        searchResult = searchThirukkural(searchTextSubmitted);
        component = <SearchResult searchText={searchTextSubmitted} searchResult={searchResult} />
    }
    console.log('searchTextSubmitted: ' + searchTextSubmitted);
    const mediaFiles = searchResult.map(kural => '/media/' + kural.id.toString() + '.mp3');

    let audioPlayerComponent = null;
    let audioPlayer = null;
    if (mediaFiles.length > 0) {
        audioPlayer = getAudioPlayer(mediaFiles);
        // setCurrentAudioPlayer(audioPlayer);
        audioPlayerComponent = (
            <AudioPlayerHowler mediaFiles={mediaFiles} audioPlayer={audioPlayer} searchTextSubmitted={searchTextSubmitted} />
        )
    }

    return (
        <div>
            <Header />
            <SearchBox
                setSearchTextSubmitted={setSearchTextSubmitted} audioPlayer={audioPlayer} />
            {audioPlayerComponent}
            {component}
        </div>
    )
}
export default SearchHomeHowler;