import { BrowserRouter } from "react-router-dom";
import ModuleRoutes from "./routes/app/ModuleRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ModuleRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
