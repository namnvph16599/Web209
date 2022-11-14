import React, { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { increment } from '../slices/counter'

type Props = {}

const Couter = (props: Props) => {
    const couter = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();
    return (
        <Fragment>
            <div>Couter : {couter}</div>
            <button onClick={() => dispatch(increment())}>+ 1</button>
        </Fragment>
    )
}

export default Couter