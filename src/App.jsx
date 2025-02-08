import { useState } from 'react'
import One from './components/One'
import Two from './components/Two'
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/Actions/Store/store';
import Childcounter from './Childcounter';
import Colorchangechild from './Colorchangechild';
import Todochild from './Todochild';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
      {/* All components which can access the redux store */}
      <Childcounter/>
      <Colorchangechild/>
<Todochild/>
     </Provider>
    </>
  )
}

export default App
