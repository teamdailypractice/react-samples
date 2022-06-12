import React from 'react';
import data from './data/kural'

function getItem(searchText) {
    const idSearched = Number.parseInt(searchText)
    let searchResult = [];
    if (Number.isInteger(idSearched)) {
        const idSearchResult = data.filter(x => x.id === idSearched);
        searchResult = searchResult.concat(idSearchResult);
    }
    const wordSearchResult = data
        .filter(x =>
            x.lines[0].includes(searchText) ||
            x.lines[1].includes(searchText) ||
            x["a_id"] === searchText.toLowerCase())
    searchResult = searchResult.concat(wordSearchResult);
    // console.log(searchResult);
    const listItems = searchResult.map((x) =>
        <div>
            <span>{x.lines[0]}</span>
            <br></br>
            <span>{x.lines[1]}</span>
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
        <div>
            {getItem(props.searchText)}
        </div>
    )
}
export default SearchResult;