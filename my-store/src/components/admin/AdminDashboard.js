import React from 'react';
import { connect } from "react-redux"
import Category from './Category';
import { useParams } from "react-router-dom"

function AdminDashboard(props) {
    // 3. add products
    // 4. delete products
    // 5. update products
    // 6. 3-5 as with categories
    const { category_id } = useParams()
    const { storeData } = props
    const { products } = storeData.find(c => 
        c.category_id === parseInt(category_id)
    )
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
            {
                products.map(product => 
                    <></>    
                )
            }
        </div>
 
   );
}
const mapStateToProps = (state) => ({
    storeData: state.storeData
})

export default connect(mapStateToProps)(AdminDashboard);