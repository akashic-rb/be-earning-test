import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ConfirmSeedPage from "./pages/ConfirmSeedPage";
import CreateWalletPage from "./pages/CreateWalletPage";


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={ <CreateWalletPage/> }/>
        </Routes>
        <Routes>
          <Route path="/confirm" element={ <ConfirmSeedPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
