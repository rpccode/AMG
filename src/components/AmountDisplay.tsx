import { ProgressCircle } from "@tremor/react"
import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import { getColorBar } from "../helpers/ColorSelected"
import { valueFormatter } from "../helpers/valueFormatter"

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

   color = useMemo(() => getColorBar(porcentaje), [porcentaje]);


  return (
    <div className="flex justify-start space-x-5 items-center">
      <ProgressCircle value={porcentaje} size={size} color={color}>
        <span className="font-medium text-xs text-tremor-content dark:text-dark-tremor-content-strong">{porcentaje.toFixed(0)}%</span>
      </ProgressCircle>
      <div>
        <p className="text-tremor-default text-blue-600 dark:text-dark-tremor-content">
          {label}
        </p>
        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          <span className={`text-${color}-400`}>{valueFormatter(amount)}</span>/{valueFormatter(budgetValue)} ({porcentaje.toFixed(0)}%)
        </p>
      </div>
    </div>
  )
}
