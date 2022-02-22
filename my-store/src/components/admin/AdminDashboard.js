import React, { useMemo } from 'react';
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import ManageProducts from './ManageProducts';
import ManageCategories from './ManageCategories';

function AdminDashboard(props) {
    // 3. add products
    // 4. delete products
    // 5. update products
    // 6. 3-5 as with categories
    const { category_id } = useParams()
    const { storeData } = props

    const products = useMemo(() => {
        const category = storeData.find(c => 
            c.category_id === parseInt(category_id)
        )
        return category?.products || []
    }, [category_id]) // eslint-disable-line

    return (
        <div>
            <ManageCategories storeData={storeData}/>
            {category_id && <ManageProducts products={products}/>}
        </div>
 
   );
}
const mapStateToProps = (state) => ({
    storeData: state.storeData
})

export default connect(mapStateToProps)(AdminDashboard);