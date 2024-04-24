
import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './main'
import RowCounter from './components/RowCounter';
import StitchCounter from './components/StitchCounter';

function App() {

  const { stitches, rows } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <section className="counter-container">
        {rows}
        <RowCounter />
        {stitches}
        <StitchCounter />
      </section>
    </>
  )
}

export default App
