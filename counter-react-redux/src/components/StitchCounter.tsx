import { useDispatch } from "react-redux"
import { actions } from "../features/counter";


const StitchCounter = () => {

    const dispatch = useDispatch();

    const handleStitchPlus = () => dispatch(actions.increaseStitch());
    const handleStitchMinus = () => dispatch(actions.decreaseStitch());

    return (
        <section>
            <h2>Stitch Counter</h2>
            <button onClick={handleStitchPlus}>+</button>
            <button onClick={handleStitchMinus}>-</button>
        </section>
    )
}

export default StitchCounter;