import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { removeProduct } from '../slices/products'

type Props = {}

const Products = (props: Props) => {
    const products = useAppSelector(state => state.product.products)
    const dispatch = useAppDispatch()
    // return (
    //     <div>{products.map((product: any) => {
    //         return <div key={product.id}>{product.name}</div>
    //     })}</div>
    // )

    const handleRemove = (id: number) => {
        console.log('id', id);
        if (id) {
            dispatch(removeProduct(id))
        }
    }

    return <table className="table-auto">
        <thead>
            <tr>
                <th>Stt</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product: any, index: number) => {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>
                        <button onClick={() => handleRemove(product.id)}>Remove</button>
                        <Link to={`edit/${product.id}`}>Edit</Link>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
}

export default Products