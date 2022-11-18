import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../slicesApi/products';

type Props = {}

const Detail = (props: Props) => {
    const { id } = useParams();
    console.log('111', id);

    const { data: product, isLoading, error } = useGetProductQuery(id as string);
    if (isLoading) return <div>Loadding</div>
    if (error) return <div>error</div>
    return (
        <div>{product.title}</div>
    )
}

export default Detail