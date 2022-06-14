import data from './data/kural'

function searchThirukkural(searchText) {

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
    return searchResult;
}

export default searchThirukkural;
