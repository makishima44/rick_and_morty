import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllCharactersPage } from "./pages/AllCharactersPage/AllCharactersPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCharactersPage />} />
          <Route path='/character/:id' element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
