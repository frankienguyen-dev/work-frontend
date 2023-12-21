import useRouteElement from './routes/useRouteElement';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routeElement = useRouteElement();
  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
