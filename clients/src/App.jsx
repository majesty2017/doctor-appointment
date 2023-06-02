import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Routers from './routes/Routers';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {Routers.map((router, index) => (
            <Route key={index} path={router.path} element={router.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App