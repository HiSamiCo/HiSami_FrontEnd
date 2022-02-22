import React from 'react'
import Category from './Category'
import CreateCategory from './CreateCategory'

export default function ManageCategories(props) {
    const { storeData } = props
    // create a new category
    // delete a category
    return (
        <div>  
            {
                storeData.map(category => 
                    <Category 
                        category={category} 
                        key={category.category_id}
                    />
                )
            }
            <CreateCategory/>
        </div>
    )
}
