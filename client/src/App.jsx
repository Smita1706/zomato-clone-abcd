import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

import { Redirect, Route } from "react-router-dom";
import Temp from "./Components/temp"
import Home from "./pages/Home"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overview from "./pages/Overview";
import OrderOnline from "./pages/OrderOnline";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Photos from "./pages/Photos";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./pages/Checkout";
import RestaurantRedirect from "./pages/RestaurantRedirect";
import GoogleAuth from "./pages/GoogleAuth";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
     <HomeLayoutHOC path="/:type" exact Component={Home}></HomeLayoutHOC>
     <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
     <RestaurantLayoutHOC path="/restaurant/:id" exact component={RestaurantRedirect} />
     <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
     <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
     <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
     <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
     <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
     <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
     </div>
  );

}
export default App;
