// import About from './About';
// import Profiles from './Profiles'; // Make sure this component is properly routed or remove it.
// import NavBar from './NavBar';
// import { Route, Routes } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
// import OrderSummary from './OrderSummary';
// import HomePage from './HomePage';
// import NoMatch from './NoMatch';
// import Products from './Products';
// import FeaturedProducts from './FeaturedProducts';
// import NewProducts from './NewProducts';
// import Users from './Users';
// import UserDetails from './UserDetails';
// import Admin from './Admin';

const Dorout = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
  
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      
      {/* Navigation bar
      <NavBar />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<HomePage />} />
        <Route path='order-summary' element={<OrderSummary />} />
      
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route index element={<FeaturedProducts />} /> {/* Default nested route */}
        {/* </Route> */}

        
        {/* // <Route path='users' element={<Users />}>
        //   <Route path=':userId' element={<UserDetails />} />
        //   <Route path='admin' element={<Admin />} />
        // </Route> */}

        {/* // <Route path='*' element={<NoMatch />} /> */}
 {/* //     </Routes>  */}
    </div>
  );
}

export default Dorout;
