import React from 'react';

const imageHolder = (props) => {

    const searchTerm = props.routeInfo.match.params.name;
    const searchField = props.searchInput;

    let imageURL = null;

    if ((searchTerm && searchField) == null)
    {
        imageURL = "https://source.unsplash.com/800x450/?$giraffe";
    }
    else if (searchTerm !== null && searchField == null)
    {
        imageURL =  "https://source.unsplash.com/800x450/?" + searchTerm;
    }
    else if (searchField !== null)
    {
        imageURL =  "https://source.unsplash.com/800x450/?" + searchField;
    }

    

    return (
        <img src={imageURL}></img>
    )

}

export default imageHolder;