import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

function SearchHome() {
    
    const [searchTextSubmitted, setSearchTextSubmitted] = useState('0000');
    const searchResult = 'test result';

    let component = null;
    if (searchTextSubmitted !== '0000') {
        component = <SearchResult searchText={searchTextSubmitted}/>
    }
    console.log('searchTextSubmitted: ' + searchTextSubmitted);
    return (
        <div>
            <Header />
            <SearchBox
                setSearchTextSubmitted={setSearchTextSubmitted} />
            {component}
        </div>
    )
}
export default SearchHome;