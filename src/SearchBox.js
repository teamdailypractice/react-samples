import React, { useState } from 'react';

function SearchBox(props) {

    const [searchText, setSearchText] = useState('');

    const onTextChange = (e) => {
        console.log(e);
        setSearchText(e.target.value);
    }
    return (
        <div>
            <input type="text" value={searchText} onChange={onTextChange} />
            <span>&nbsp;&nbsp;</span>
            <button onClick={() => {
                if (searchText.length === 0) {
                    return;
                }
                console.log(searchText);
                props.setSearchTextSubmitted(searchText);
                setSearchText('');
            }}>Search</button>
        </div>
    )
}
export default SearchBox;