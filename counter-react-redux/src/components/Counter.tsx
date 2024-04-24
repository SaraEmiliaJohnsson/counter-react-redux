import { useDispatch } from "react-redux"
import { actions } from "../features/counter";


const Counter = () => {

    const dispatch = useDispatch();

    const handlePlus = () => dispatch(actions.increase());
    const handleMinus = () => dispatch(actions.decrease());

    return (
        <section>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
        </section>
    )
}

export default Counter;