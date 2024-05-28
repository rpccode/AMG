
import { ProgressBard } from '../components'
import { BudgetTracker } from '../components/BudgetTracker'
import { ProgressCircleCard } from '../components/ProgressCircleCard'

export const DashboardPage = () => {
  return (
    <>
    <BudgetTracker/>
      {/* <ProgressBard/> */}
      
      <ProgressCircleCard/>
      <ProgressCircleCard/>
      <ProgressCircleCard/>
      <ProgressCircleCard/>
      <ProgressCircleCard/>
    

    </>
  )
}
