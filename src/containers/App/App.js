import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import services1 from "../../img/services1.png";
import services2 from "../../img/services2.png";
import services3 from "../../img/services3.png";
import Header from '../Header';
import Home from '../Home';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Client from '../Client';
import Testimonial from '../Testimonial';
import Blog from '../Blog';
import Contact from '../Contact';


const data = [
  { img: services1 ,
   title: "UX Research" ,
  subtitle: `New demos are continually added and buying a single license for Mak gives you access to all of
  what's shown below, plus everything that will be added in the future.`
  },

  { img: services2 ,
  title: "Brand Design" ,
  subtitle: `New demos are continually added and buying a single license for Mak gives you access to all of
  what's shown below, plus everything that will be added in the future.`
  },

  { img: services3 ,
   title: "Web Development" ,
  subtitle: `New demos are continually added and buying a single license for Mak gives you access to all of
  what's shown below, plus everything that will be added in the future.`
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services data={data} />
      <Portfolio />
      <Client />
      <Testimonial />
      <Blog />
      <Contact/>
    </div>
  );
}

export default App;
