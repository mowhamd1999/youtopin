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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
