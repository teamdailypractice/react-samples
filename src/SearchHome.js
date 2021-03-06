import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Header from './Header';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import searchThirukkural from './ThirukkuralSearch';
import { AudioPlayerProvider } from "react-use-audio-player"
import AudioPlayerTwo from './AudioPlayerTwo';

function SearchHome() {

    // const [songIndex, setSongIndex] = useState(0);
    const [searchTextSubmitted, setSearchTextSubmitted] = useState('0000');
    let searchResult = [];

    let component = null;
    if (searchTextSubmitted !== '0000') {
        searchResult = searchThirukkural(searchTextSubmitted);
        component = <SearchResult searchText={searchTextSubmitted} searchResult={searchResult} />
    }
    console.log('searchTextSubmitted: ' + searchTextSubmitted);
    const mediaFiles = searchResult.map(kural => '/media/' + kural.id.toString() + '.mp3');

    let audioPlayerComponent = null;

    if (mediaFiles.length > 0) {
        const isNewSearchResult = true;
        audioPlayerComponent = (<AudioPlayerProvider>
            {/* <AudioPlayerTwo mediaFiles={mediaFiles} setSongIndex={setSongIndex} songIndex={songIndex}/> */}
        <AudioPlayerTwo mediaFiles={mediaFiles} isNewSearchResult={isNewSearchResult}/> 
        </AudioPlayerProvider>)
    }

    return (
        <div>
            <Header />
            <SearchBox
                setSearchTextSubmitted={setSearchTextSubmitted} />
            {audioPlayerComponent}
            {component}
        </div>
    )
}
export default SearchHome;