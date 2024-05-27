import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import { BudgeForm } from "./components"
import { DashboardPage } from "./views/DashboardPage"




function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/" element={<BudgeForm />} />
        <Route index path="/admin" element={<DashboardPage />} />

      </Route>

    </Routes>
  )
}

export default App
