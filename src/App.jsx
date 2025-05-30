import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FormPage from "./pages/FormPage";
import MenuPage from "./pages/MenuPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
