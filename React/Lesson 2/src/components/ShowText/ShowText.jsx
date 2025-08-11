import { useState } from 'react'

const ShowText = () => {
    const [isShowText, setIsShowText] = useState(false);

    const toggleText = () => {
        setIsShowText(prevState => !prevState);
    }

    // &&
    // ||
  return (
    <div>
        <button onClick={toggleText}>
            {isShowText ? "Скрыть текст" :  "Показать текст" }
        </button>

        {
            isShowText && <p>Hello world!</p>
        }
    </div>
  )
}

export default ShowText