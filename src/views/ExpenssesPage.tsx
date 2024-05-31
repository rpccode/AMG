
import BudgetTracker2 from '../components/BudgetTracker2'
import { Idata } from '../config/interfaces/IBills';
import { ExpensesCard } from '../components/ExpensesCard';

export const ExpenssePage = () => {
  const data:Idata[] = [
    {
      name: "Travel",
      amount: 6730,
      share: "32.1%",
      color: "bg-cyan-500",
    },
    {
      name: "IT & equipment",
      amount: 4120,
      share: "19.6%",
      color: "bg-blue-500",
    },
    {
      name: "Training & development",
      amount: 3920,
      share: "18.6%",
      color: "bg-indigo-500",
    },
    {
      name: "Office supplies",
      amount: 3210,
      share: "15.3%",
      color: "bg-violet-500",
    },
    {
      name: "Communication",
      amount: 3010,
      share: "14.3%",
      color: "bg-fuchsia-500",
    },
  ];
  return (
    <>
      <BudgetTracker2 title={'Total de gastos por categoria'} data={data}/>
      <ExpensesCard/>
    </>
  )
}
