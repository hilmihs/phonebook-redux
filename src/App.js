import './App.css';
import Layout from './components/Layout';
import { configureStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
