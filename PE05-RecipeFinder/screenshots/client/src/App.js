import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
