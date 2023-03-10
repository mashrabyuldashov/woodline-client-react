import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyProf from "./Pages/MyProf/MyProf";
import Login from "./Pages/Login/Login";
import Private from "./Routes/Private";
import Public from "./Routes/Public";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/myprof" element={<MyProf />} />

          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<Public />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
