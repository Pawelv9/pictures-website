import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((({ description, id, irls })) => {
        return <img alt={description} key={id} src={urls.regular} />
    })
    
    console.log(props.images);
    return <div>{images}</div>
};

export default ImageList;