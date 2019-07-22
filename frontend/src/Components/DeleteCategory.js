import React from 'react';
const DeleteCategory = (props) => {
    let { category, deleteCategory, getCategoriesQuery } = props;
    const onDeleteCategory = (category, deleteCategory) => {
        deleteCategory(
            {
                variables: { name: category.name },
                refetchQueries: [{ query: getCategoriesQuery }]
            })
    };

    return (
        <button onClick={(e) => onDeleteCategory(category, deleteCategory)}
            type="button" className="btn btn-outline-primary">x</button>
    )
}

export { DeleteCategory }