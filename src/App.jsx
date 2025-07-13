import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Counter from "./Main/Counter";
import Weather from "./Main/Weather";
import Home from "./Main/Home";
import GroceryСart from "./Main/GroceryСart";
import Footer from "./Footer/Footer";
import FormLogin from "./Main/FormLogin";
import FormRegistration from "./Main/FormRegistration";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/mainStart" element={<Weather />} />
        <Route path="/main" element={<Counter />} />
        <Route path="/groceryСart" element={<GroceryСart />} />
        <Route path="/formLogin" element={<FormLogin />} />
        <Route path="/formRegistration" element={<FormRegistration />} />
      </Routes>
      <Footer />
    </div>
  );
}
