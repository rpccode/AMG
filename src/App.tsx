import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import { BudgeForm } from "./components"
import { DashboardPage } from "./views/DashboardPage"
import { GoasPage } from "./views/GoasPage"

import { BudgetTracker } from "./components/BudgetTracker"
import { ExpenssePage } from "./views/ExpenssesPage"




function App() {


  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/" element={<BudgeForm />} />
        <Route  path="/admin" element={<DashboardPage />} />
        <Route  path="/budget" element={<BudgetTracker/>} />
        <Route  path="/goals" element={<GoasPage/>} />
        <Route  path="/bills" element={<ExpenssePage/>} />

      </Route>

    </Routes>
  )
}

export default App
