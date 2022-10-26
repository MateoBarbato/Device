import { Provider } from "react-redux";
import {init} from './db'
import AppNavigator from "./navigation/index";
import { store } from "./store";
export default function App() {
  init()
  .then(()=>{
    console.log('db initialized')
  })
  .catch((err)=> {
    console.log('initializing failed')
    console.log(err)
  })

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
