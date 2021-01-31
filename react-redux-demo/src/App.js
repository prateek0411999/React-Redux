import logo from './logo.svg';
import CakeContainer from '../src/components/cakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import itemContainer from './components/itemContainer';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <itemContainer cake />
      <itemContainer/>
      <CakeContainer />
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
