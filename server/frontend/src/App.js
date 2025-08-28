import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import LoginPanel from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import PostReview from "./components/Dealers/PostReview";
import SearchCars from "./components/Dealers/SearchCars";	

function App() {
  return (
    <Routes>
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/postreview/:id" element={<PostReview />} />
      <Route path="/searchcars/:id" element={<SearchCars />} />
    </Routes>
  );
}
export default App;
