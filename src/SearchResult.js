import React from 'react';
import data from './data/kural'
import searchThirukkural from './ThirukkuralSearch'

function getItem(searchText) {
    const searchResult = searchThirukkural(searchText)
    // console.log(searchResult);
    const listItems = searchResult.map((x) =>
        <div className='kural'>
            <span>{x.lines[0]}</span>
            <br /><br />
            <span>{x.lines[1]}</span>
            {/* <p>
                <audio controls>
                    <source src="/media/1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </p> */}
        </div>
    );

    return (
        <>
            {listItems.length > 0 ?
                listItems :
                <p><span>{searchText} - Not Found</span></p>}
        </>
    );

    // else {
    //     return <p>{searchText} - not valid id</p>;
    // }

}

function SearchResult(props) {
    return (
        <>
            {getItem(props.searchText)}
        </>
    )
}
export default SearchResult;