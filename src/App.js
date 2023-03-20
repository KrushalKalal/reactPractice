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
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Datastat from './components/Datastat';
import CounterClick from './components/CounterClick';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import RenderCounter from './RenderCounter';
import ComponetA from './components/Context/ComponetA';

function App() {
  return (
    <div>
        <Form/>
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/> */}
        {/* <User name="karan"/> */}
        {/* <User name={()=> "Karan"}/> */}
        {/* <User name={(isLoggedin)=> isLoggedin ? "Karan" : "Guest"}/> */}
        <RenderCounter render={(count,incrementCount)=>
          (<ClickCounterTwo count={count} incrementCount={incrementCount}/>
         )}
        />
         <RenderCounter render={(count,incrementCount)=>
          (<HoverCounterTwo count={count} incrementCount={incrementCount}/>
         )}
        />
        <Listing/>
        <ComponetA/>
        <CounterClick/>
        <ClickCounter name="karan"/>
        <HoverCounter name="krish"/>
        <Datastat/>
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
