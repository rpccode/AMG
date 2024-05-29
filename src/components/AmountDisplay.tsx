import { ProgressCircle } from "@tremor/react"
import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"

type AmountDisplayProps = {
  label: string,
  amount: number,
  color?: string,
  size?: string
}

export const AmountDisplay = ({ label, amount, color, size }: AmountDisplayProps) => {
  const { budgetValue } = useBudget()

  const porcentaje = useMemo(() => {
    return (amount / budgetValue) * 100
  }, [amount, budgetValue])

  let  colorBar = useMemo(() => {
    if (porcentaje >= 90) return 'red';
    else if (porcentaje >= 50) return 'orange';
    else if (porcentaje >= 20) return 'yellow';
    else if (porcentaje >= 5) return 'blue';
    else return 'red';
  }, [porcentaje])


  return (
    <div className="flex justify-start space-x-5 items-center">
      <ProgressCircle value={porcentaje} size={size} color={colorBar}>
        <span className="font-medium text-xs text-tremor-content dark:text-dark-tremor-content-strong">{porcentaje.toFixed(0)}%</span>
      </ProgressCircle>
      <div>
        <p className="text-tremor-default text-blue-600 dark:text-dark-tremor-content">
          {label}
        </p>
        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          ${amount}/${budgetValue} ({porcentaje.toFixed(0)}%)
        </p>
      </div>
    </div>
  )
}
