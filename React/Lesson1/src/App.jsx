import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0); // [0, f]

    const incrementBy1 = () => {
        setCount(prevState => prevState + 1)
    }

    const incrementBy5 = () => {
        setCount(prevState => prevState + 5)
    }

    const reset = () => {
        setCount(0)
    }

    const increment = (count) =>{
        setCount(prevState => prevState + count)
    }

    return (
        <div>
            <div>
                <button onClick={incrementBy1}>Увеличить на 1</button>
                <button onClick={incrementBy5}>Увеличить на 5</button>
                <button onClick={() => increment(4)}>Увеличить</button>
                <button onClick={reset}>Сбросить</button>
            </div>

            <h2>{count}</h2>
        </div>
    )
}

export default App