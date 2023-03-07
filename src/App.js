import './App.css';
// import Hellofn from './components/Hellofn';
// import Helloclass from './components/Helloclass';
// import HelloWithoutjsx from './components/Hellowithoutjsx';
// import Hellowithjsx from './components/Hellowithjxs';
// import Counter from './components/Counter';
// import Eventbind from './components/Eventbind';
// import Counterhooks from './components/Counthook';
// import Home from './components/Home';
// import Hellomount from './components/Hellomount';
import Form from './components/Form';
import { Listing } from './components/Listing';

function App() {
  return (
    <div>
        <Form/>
        <Listing/>
       {/* <p>Hello World</p>
       <Hellofn name="krish"/>
       <Helloclass name="misk"/>
       <Hellowithjsx/>
       <HelloWithoutjsx/>
       <Counter/>
       <Eventbind/>
       <Counterhooks/>
       <Home/>

       <Hellomount/> */}
    </div>
      
  );
}

export default App;
