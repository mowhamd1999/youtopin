import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

//////////////////////////////////////////////////
import store from "./Redux/store";
import { Provider } from "react-redux";
//////////////////////////////////////////////////
//////////////////////////////////////////////////
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Tour_details from './pages/tour_details/Tour_details'
//////////////////////////////////////////////////

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tour/tour-details/:id" element={<Tour_details />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
