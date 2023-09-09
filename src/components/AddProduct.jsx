import { useState } from "react"
import { useDispatch } from "react-redux"
// import { update } from "../features/productSlice"
import { saveProduct } from "../features/productSlice"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // const updateProduct = (e) => {
    //     e.preventDefault()
    //     dispatch(update({title, price}))
    // }

    const createProduct = async(e) => {
        e.preventDefault()
        await dispatch(saveProduct({title, price}))
        navigate('/')
    }

    return (
        <div>
            {/* <form onSubmit={ } className="box mt-5"> */}
            <form onSubmit={createProduct} className="box mt-5">
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="title" 
                                value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="price"
                                value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <button className="button is-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct