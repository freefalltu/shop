import cn from 'classnames'
import cl from './Counter.module.scss'
import React, { useState } from 'react'
import MyButton from '../button/MyButton'

interface CounterProps {
    size?: 'medium' | 'large';
}

const Counter: React.FC<CounterProps> = ({ size = 'medium' }) => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount(value => value + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(value => value - 1)
        }
    }
    size = count >=10 ? 'large' : 'medium'

    return (
        <div className={cl.counter}>
            <MyButton 
            className={cn(cl.myBtn, cl[size])}
            onClick={decrement}
            view='icon'
            >
                <div className={cl.minus} />
            </MyButton>
            <span>{count} items</span>
            <MyButton 
            className={cn(cl.myBtn, cl[size])}
            onClick={increment}
            view='icon'
            >
                <div className={cl.plus} />
            </MyButton>
        </div>
    )
}

export default Counter