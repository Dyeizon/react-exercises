import { Exercise } from './components/Exercise';
import {Search} from './components/Search';
import {Counter} from './components/Counter';
import {DisplayList} from './components/DisplayList';
import {Accordion} from './components/Accordion';
import {Slider} from './components/Slider';
import {Checklist} from './components/Checklist';
import { Login } from './components/Login';
import { Rest } from './components/Rest';
import { Multipage } from './components/Multipage';
import { Context } from './components/Context';

function App() {
  return (
    <div className='container'>
      <Exercise title="Exercise 01" desc="search bar with a filter">
        <Search/>
      </Exercise>

      <Exercise title="Exercise 02" desc="counter">
        <Counter/>
      </Exercise>

      <Exercise title="Exercise 03" desc="display a list">
        <DisplayList/>
      </Exercise>

      <Exercise title="Exercise 04" desc="build an accordion">
        <Accordion/>
      </Exercise>

      <Exercise title="Exercise 05" desc="image slider">
        <Slider/>
      </Exercise>

      <Exercise title="Exercise 06" desc="checklist">
        <Checklist/>
      </Exercise>

      <Exercise title="Exercise 07" desc="login form">
        <Login/>
      </Exercise>

      <Exercise title="Exercise 08" desc="print data from rest api">
        <Rest/>
      </Exercise>

      <Exercise title="Exercise 09" desc="multi-page navigation with react router">
        <Multipage/>
      </Exercise>

      <Exercise title="Exercise 10" desc="context api in react components">
        <Context/>
      </Exercise>
    </div>
  );
}

export default App;