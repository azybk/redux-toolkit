import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"

import { getProducts, productSelectors, deleteProduct } from "../features/productSlice"

const ShowProduct = () => {
    // const { title, price } = useSelector(state => state.product)

    const dispatch = useDispatch()  
    const products = useSelector(productSelectors.selectAll)

    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch])

    return (
        <div className="box mt-5">
            {/* <h4 className="title is-4">Title: {title}</h4>
            <h4 className="title is-4">Price: {price}</h4> */}

            <Link to='add' className='button is-success'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`edit/${product.id}`} className="button is-info is-small">Edit</Link>
                                    <button onClick={() => dispatch(deleteProduct(product.id))} className="button is-danger is-small">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowProduct