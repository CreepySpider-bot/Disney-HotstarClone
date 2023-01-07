import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Home/>
      </div>
    },
    {
      path: "/details",
      element: <div>
        <Details/>
      </div>
    },
    {
      path: "/login",
      element: <div>
        <Login/>
      </div>
    }
  ]);
  return (
    <div>
      <Header/>
        <RouterProvider router={router} />
    </div>
        
    );
}

export default App;
