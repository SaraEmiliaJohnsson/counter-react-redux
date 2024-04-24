import { useDispatch } from "react-redux"
import { actions } from "../features/counter";


const RowCounter = () => {

    const dispatch = useDispatch();

    const handleRowPlus = () => dispatch(actions.increaseRow());
    const handleRowMinus = () => dispatch(actions.decreaseRow());

    return (
        <section>
            <h2>Row Counter</h2>
            <button onClick={handleRowPlus}>+</button>
            <button onClick={handleRowMinus}>-</button>
        </section>
    )
}

export default RowCounter;