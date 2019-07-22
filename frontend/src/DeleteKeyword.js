import React from 'react';
const DeleteKeyword = (props) => {
    let { category, deleteKeyword,keyword, getCategoriesQuery } = props;
    const onDeleteKeyWord = (category, keyword, deleteKeyword) => {
        deleteKeyword(
          {
            variables: { name: category.name, keyword },
            refetchQueries: [{ query: getCategoriesQuery }]
          })
    
      };

    return (
        <button onClick={(e) => onDeleteKeyWord(category, keyword, deleteKeyword)}
            type="button" className="btn btn-outline-primary">x</button>
    )
}

export { DeleteKeyword }