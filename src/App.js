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
              <Route path="/singup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
