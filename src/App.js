import { BrowserRouter ,Router, Routes, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
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
    details:"Elevate your professional look with our range of high-quality uniforms. From sleek office attire to durable workwear, we offer uniforms tailored to various industries and professions. Made from premium fabrics and designed for comfort and style, our uniforms will make you look and feel your best."
  },
  {
    id: 2,
    name: 'Books',
    href: '#',
    price: '300',
    imageSrc: c1,
    imageAlt: 'books',
    details:"Dive into a world of knowledge and imagination with our extensive collection of books. Whether you're an avid reader, a student, or a book enthusiast, we have something for everyone. Explore fiction, non-fiction, textbooks, and more, curated to inspire, educate, and entertain."

  },
  {
    id: 3,
    name: 'Spects',
    href: '#',
    price: '500',
    imageSrc: c3,
    imageAlt: 'image4',
    details:"See the world with clarity and style with our fashionable range of spectacles. Our collection features a variety of frames to suit every face shape and personal style. Whether you're looking for classic designs or trendy frames, we have the perfect pair of spectacles to complement your look and enhance your vision."
  },
  {
    id: 4,
    name: 'Evehicle',
    href: '#',
    price: '300', 
    imageSrc: c4,
    imageAlt: 'image5',
    details:"Experience freedom and mobility with our selection of vehicles. From sleek cars to rugged motorcycles, we offer a diverse range of options to suit your transportation needs. Whether you're commuting to work, embarking on a road trip, or exploring off-road terrain, we have the perfect vehicle to take you on your next adventure."
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
    
    
    
      
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Register" element={<Register/>} />
        <Route exact path="/home" element={<Home/>} />
      <Route exact path="/collegeuniform" element={<Product eachp={products[0]}/>}/>   
         <Route exact path="/Books" element={<Product eachp={products[1]}/>}/> 
         <Route exact path="/Spects" element={<Product eachp={products[2]}/>}/>
           <Route exact path="/Evehicle" element={<Product eachp={products[3]}/>}/>
</Routes>
   
    </div>
    </div>
  );
}

export default App;
