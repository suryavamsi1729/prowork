import { RouterProvider } from "react-router-dom";
import { EmailProvider } from "./context/Email";
import { AppRouter } from "./routes/AppRoute";
function App() {
  
  return (
    <EmailProvider>
      <RouterProvider router={AppRouter}/>
    </EmailProvider>
  );
}

export default App;
