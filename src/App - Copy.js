import { BrowserRouter ,Router, Routes, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import c1 from './cubook.jpg';
import c2 from './cuuniform.jpg';
import c3 from './cuimg4.jpg';
import c4 from './cuimg5.jpg';
import Card from './cardui.jsx';
import Example from './navbar.js'
import Cads from './newproductlist.js';
import Example1 from './productslist.js';
import Product from './productdetails.js';
import Home from './home.js';

const products=[{
    id: 1,
    name: 'College Uniform',
    href: '#',
    price: '1000',
    imageSrc: c2,
    imageAlt: 'uniform image',
  },
  {
    id: 2,
    name: 'Books',
    href: '#',
    price: '300',
    imageSrc: c1,
    imageAlt: 'books',
  },
  {
    id: 3,
    name: 'Spects',
    href: '#',
    price: '500',
    imageSrc: c3,
    imageAlt: 'image4',
  },
  {
    id: 4,
    name: 'Evehicle',
    href: '#',
    price: '300',
    imageSrc: c4,
    imageAlt: 'image5',
  },

];
function App() {
   const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <div className="text-3xl font-bold underline">
        {/* <Router>
<Switch>
  <Route exact path="/">
    {
      user && user._id ? <Home/>:<Login/>
    }<Home/></Route>
  <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
  <Route path="/Register"><Register/></Route>
</Switch>

      </Router> */}
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
       
      </BrowserRouter>
      <BrowserRouter>
      <Routes>
      <Route exact path="/collegeuniform" element={<Product eachp={products[0]}/>}/>   
         <Route exact path="/Books" element={<Product eachp={products[1]}/>}/> 
         <Route exact path="/Spects" element={<Product eachp={products[2]}/>}/>
           <Route exact path="/Evehicle" element={<Product eachp={products[3]}/>}/>
</Routes>
    </BrowserRouter>
   
    </div>
    </div>
  );
}

export default App;
