import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseAdd from "./components/CourseAdd";
import CourseDelete from "./components/CourseDelete";
import CourseSearch from "./components/CourseSearch";
import CourseView from "./components/CourseView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CourseAdd />} />
        <Route path="search" element={<CourseSearch />} />
        <Route path="delete" element={<CourseDelete />} />
        <Route path="view" element={<CourseView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
