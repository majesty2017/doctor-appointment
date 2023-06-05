import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from "./routes/Routers";
import { useSelector } from "react-redux";
import { Loader } from "./components";

const App = () => {
  const { loading } = useSelector((state) => state.loadings);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            {Routers.map((router, index) => (
              <Route
                key={index}
                path={router.path}
                element={router.component}
              />
            ))}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
