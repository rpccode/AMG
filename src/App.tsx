import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import { BudgeForm } from "./components"
import { DashboardPage } from "./views/DashboardPage"
import { BudgetPages } from "./views/BudgetPages"
import { GoasPage } from "./views/GoasPage"
import { Bills } from "./views/Bills"
import { BudgetTracker } from "./components/BudgetTracker"




function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/" element={<BudgeForm />} />
        <Route  path="/admin" element={<DashboardPage />} />
        <Route  path="/budget" element={<BudgetTracker/>} />
        <Route  path="/goals" element={<GoasPage/>} />
        <Route  path="/bills" element={<Bills/>} />

      </Route>

    </Routes>
  )
}

export default App
