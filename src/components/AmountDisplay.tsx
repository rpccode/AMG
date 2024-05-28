import { ProgressCircle } from "@tremor/react"
import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"

type AmountDisplayProps = {
  label: string,
  amount: number,
  color?: string
}

export const AmountDisplay = ({ label, amount, color }: AmountDisplayProps) => {
  const { budgetValue } = useBudget()

  const porcentaje = useMemo(() => {
    return (amount / budgetValue) * 100
  }, [amount, budgetValue])

  let colorBar = ''
  if (porcentaje === 100) colorBar = 'green'
  else if (porcentaje <= 50) colorBar = 'orange'
  else if (porcentaje <= 20) colorBar = 'yellow'
  else if (porcentaje <= 5) colorBar = 'red'

  return (
    <div className="flex justify-start space-x-5 items-center">
      <ProgressCircle value={porcentaje} size="sm" color={colorBar}>
        <span className="text-xs font-medium text-slate-700">{porcentaje.toFixed(2)}%</span>
      </ProgressCircle>
      <div>
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          {label}
        </p>
        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          ${amount}/${budgetValue} ({porcentaje.toFixed(2)}%)
        </p>
      </div>
    </div>
  )
}
