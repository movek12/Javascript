
import { useState } from 'react';
import CounterWithUseReducer from './CounterWithUseReducer';
import ALogInForm1 from './ALogInForm1';
import './App.css';
import ApplicationForm from './ApplicationForm';
import ContextHook from './ContextHook';
import Counter from './Counter';
import CounterApp from './CounterApp';
import CounterWithUseRef from './CounterWithUseRef';
import LoginForm from './LoginForm';
import ToDo from './ToDo';

function App() {
  const [isRegistered,setIsRegistered] = useState(false);
  return (
    <div className="App">
      {/* <>
      {!isRegistered ? <LoginForm/> : <ApplicationForm setIsRegistered={setIsRegistered}/> }
      </> 
      <ALogInForm1/>  */}
      {/* <CounterApp/>
      <Counter/>
      <CounterWithUseRef/> */}
      {/* <ContextHook/> */}
      {/* <CounterWithUseReducer/> */}
      <ToDo/>
    </div>
  );
}

export default App;
