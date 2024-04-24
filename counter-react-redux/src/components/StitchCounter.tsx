import { useDispatch } from "react-redux"
import { actions } from "../features/counter";


const StitchCounter = () => {

    const dispatch = useDispatch();

    const handleStitchPlus = () => dispatch(actions.increaseStitch());
    const handleStitchMinus = () => dispatch(actions.decreaseStitch());

    return (
        <section>

            <button onClick={handleStitchPlus}>+</button>
            <button onClick={handleStitchMinus}>-</button>
            <h3>Stitch Counter</h3>

        </section>
    )
}

export default StitchCounter;