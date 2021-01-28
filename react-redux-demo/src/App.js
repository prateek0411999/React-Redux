import logo from './logo.svg';
import CakeContainer from '../src/components/cakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
