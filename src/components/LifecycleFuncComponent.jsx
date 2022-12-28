import { useEffect, useState } from "react"

const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(5)
    // useState(inicijalna vrednost) - zachuvuvanje dinamichka vrednost na komponenta pomegju renderi [vrednost, funkcija(preku koja se menuva vrednosta)]

    // rerenderiranje samo vo 2 sluchai : pri promena na state i props

    const increment = () => {
        setCounter(counter + 10)
    }

    useEffect(() => {

        console.log("like a componentDidMount")

        return () => {
            console.log("like a componentWillUnmount")
        }
    }, [])

    return <div>
        counter : {counter}

        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter + 10)}>Increment v2</button>
    </div>
}

export default LifecycleFuncComponent;