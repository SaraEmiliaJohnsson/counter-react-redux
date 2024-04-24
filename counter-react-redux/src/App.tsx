
import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './main'
import Counter from './components/Counter';

function App() {

  const countValue = useSelector((state: RootState) => state.counter);

  return (
    <>
      {countValue}
      <Counter />
    </>
  )
}

export default App
