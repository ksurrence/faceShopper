import React from 'react'
import _ from 'lodash'

export default function AddFace({ handleChange, handleSubmit,
    face, user, sessionId, selectedQuantity }) {

    const quantityOnHand = face.quantity
    const options = _.range(quantityOnHand + 1)
 
    return (
        <div className="form-container">
            <form onSubmit={
                (evt) => { handleSubmit(user, sessionId, face, selectedQuantity, evt) }
            }>
                <legend>Select a quantity:</legend>
                <div>
                    <select 
                        onChange={(evt) => {handleChange(item, evt.target.value)}}
                        className="form-control"
                        id="quantity"
                        onChange={handleChange}>
                        {options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-danger">Add to Cart</button>
            </form>
        </div>
    )
}
