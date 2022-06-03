import './dist/App.css';
import Menu from './Menu/Menu';
import Timer from './Main/Timer/Timer';
import Footer from './Footer/Footer';
import Home from './Main/Home';
import Gallery from './Gallery/Gallery'
import Tours from './Tours/Tours'
import Booking from './Booking/Booking'
import Error from './Error/Error'
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"туры"}, {value:"забронировать"}, {value:"галерея"}];

  return (
    <div className="App">

      <header className="App-header">
        <nav>
          <Link to="/"><div className="logo"></div></Link>
        
          <div className="timer__container">
              <Timer days={130} hours={15} minutes={5} />
          </div>

          <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
              <div className="burger-btn-2">
                <div className="burger-btn-3"></div>
              </div>
          </div>
        </nav>
        
        <Menu active={menuActive} setActive={setMenuActive} items={items}/>
      </header>

      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/tours' component={Tours}/>
          <Route path='/booking' component={Booking}/>
          <Route path='/error' component={Error}/>
        </Switch>
      </main>

      <section className="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
