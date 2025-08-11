import { useState } from "react";

const LightSwitch = () => {
    const [isLightOn, setIsLightOn] = useState(false);

    const toggleLight = () => {
        setIsLightOn(prevState => !prevState);
    }

    return (
        <div className={`light-switch ${isLightOn ? 'light-switch_on' : ''}`}>
            <button onClick={toggleLight}>
                {isLightOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    )
}

export default LightSwitch