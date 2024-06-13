import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Card, Icon } from "@tremor/react";
import { Expensse } from "../config/interfaces/expensse";
import { dateFormatter } from "../helpers/valueFormatter";
import { AmountLabel } from "./AmountLabel";
import { useExpenseData } from "../hooks/useExpenseData";

type ExpenseCardProps = {
  expense?: Expensse;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  const {categorieInfo,porcentaje} = useExpenseData({ expensse: expense })
  

  if (!categorieInfo) {
    // Handle the case where categorieInfo is undefined
    return null; // or display a placeholder or default content
  }

  const leadingActions = () =>(
    <LeadingActions>
      <SwipeAction
      onClick={() =>{}}
      >
        Eliminar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () =>(
    <TrailingActions>
      <SwipeAction
      onClick={() =>{}}
      >
        Actualizar
      </SwipeAction>
    </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <Card className="group shadow-md border-dark-tremor-brand-faint">
          <div className="flex items-center space-x-4">
            <span
              className={classNames(
                categorieInfo.bgColor,
                categorieInfo.textColor,
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-tremor-default font-medium"
              )}
              aria-hidden={true}
            >
              {expense && <Icon icon={categorieInfo.icon} />}
            </span>
            <div className="truncate flex-1">
              <p className="truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                {expense && categorieInfo.name}
              </p>
              <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <span className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden={true} />
                  {expense && expense.expensesName}
                </span>
              </p>
              <p className="truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                {expense && dateFormatter(expense.expensesDate)}
              </p>
            </div>
            <AmountLabel amount={expense?.amount || 0} color={categorieInfo.color} />
          </div>
          <span
            className="pointer-events-none absolute right-4 top-4 text-tremor-content-subtle group-hover:text-tremor-content dark:text-dark-tremor-content-subtle group-hover:dark:text-dark-tremor-content"
            aria-hidden={true}
          >
            {porcentaje.toFixed(2)}%
          </span>
        </Card>
      </SwipeableListItem>
    </SwipeableList>
  );
};
