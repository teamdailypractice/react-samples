import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Header from './Header';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import searchThirukkural from './ThirukkuralSearch';

function SearchHome() {
    
    const [searchTextSubmitted, setSearchTextSubmitted] = useState('0000');
    const searchResult = 'test result';

    let component = null;
    if (searchTextSubmitted !== '0000') {
        const searchResult = searchThirukkural(searchTextSubmitted);
        component = <SearchResult searchText={searchTextSubmitted} searchResult={searchResult}/>
    }
    console.log('searchTextSubmitted: ' + searchTextSubmitted);
    const mediaFiles = ['/media/1.mp3'];
    const howmanyTimesToPlay = 2;
    return (
        <div>
            <Header />
            <SearchBox
                setSearchTextSubmitted={setSearchTextSubmitted} />
                <AudioPlayer audioSrc={mediaFiles} howmanyTimesToPlay={howmanyTimesToPlay}/>
            {component}
        </div>
    )
}
export default SearchHome;