import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Following from "./pages/Following";
import Addpost from "./pages/Addpost";
import WebDevelopment from "./pages/WebDevelopment";
import JavaScript from "./pages/JavaScript";
import ReactPage from "./pages/ReactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addpost" element={<Addpost/>}></Route>
          <Route path="/following" element={<Following/>}></Route>
          <Route path="/webdevelopment" element={<WebDevelopment/>}></Route>
          <Route path="/javascript" element={<JavaScript/>}></Route>
          <Route path="/reactpage" element={<ReactPage/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
  );
}


export default App;
