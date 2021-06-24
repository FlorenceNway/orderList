import './App.css';
import OrderList from './components/OrderList';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import orderDetails from './components/OrderDetails';

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Switch>
            <Route exact path='/' component={OrderList}/>
            <Route exact path='/details' component={orderDetails}/>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
