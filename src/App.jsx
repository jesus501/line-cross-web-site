import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Pillars } from "./pages/Pillars";
import { Services } from "./pages/Services";
import { StartUp } from "./pages/StartUp";
import { Blog } from "./pages/Blog";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Pillars />
                <Services />
                <StartUp />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
