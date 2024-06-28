import Layout from "./components/shared/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<h1>Dashboard</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
