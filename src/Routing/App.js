 import React from 'react';
 import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom'
 import Header from './Header';
 import Footer from './Footer';
 import Home from './Home';
 import Features from './Features';
 import Pricing from './Pricing';
 import Disable from './Disable';
 import Product from './Product';
 import Mobile from './Mobile';
 import Laptop from './Laptop';

 
 const App = () => {
   return (

    <Router>
        
            <Header />
            <Routes>
                <Route path = '/' element = {<Navigate to = '/home' />} />
                <Route path = '/home' element = {<Home />}/>
                <Route path = '/products' element ={<Product />}>
                  <Route path = 'mobile' element ={<Mobile />} />
                  <Route path = 'laptop' element = {<Laptop />} />
                </Route>
                <Route path = '/features' element = {<Features />} />
                <Route path = '/pricing' element = {<Pricing />} />
                <Route path = '/*' element = {<Disable />} />
            </Routes>
            <Footer />
        
     </Router>
   )
 }
 
 export default App;