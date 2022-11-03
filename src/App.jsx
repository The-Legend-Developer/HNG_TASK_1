import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="pt-12 pb-6 px-4">
              <Header />
              <Main />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
