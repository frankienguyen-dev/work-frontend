import useRouteElement from './routes/useRouteElement';

function App() {
  const routeElement = useRouteElement();
  return <div>{routeElement}</div>;
}

export default App;
