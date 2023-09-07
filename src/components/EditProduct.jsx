import { useState } from "react"
import { useDispatch } from "react-redux"
import { update } from "../features/productSlice"

const EditProduct = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()


    const updateProduct = (e) => {
        e.preventDefault()
        dispatch(update({title, price}))
    }

    return (
        <div>
            <form onSubmit={updateProduct} className="box mt-5">
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
                    <button className="button is-success">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct