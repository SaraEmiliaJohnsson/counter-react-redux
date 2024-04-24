import { useDispatch } from "react-redux"
import { actions } from "../features/counter";


const RowCounter = () => {

    const dispatch = useDispatch();

    const handleRowPlus = () => dispatch(actions.increaseRow());
    const handleRowMinus = () => dispatch(actions.decreaseRow());

    return (
        <section>

            <button onClick={handleRowPlus}>+</button>
            <button onClick={handleRowMinus}>-</button>
            <h3>Row Counter</h3>

        </section>
    )
}

export default RowCounter;