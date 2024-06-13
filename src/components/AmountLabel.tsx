
import { valueFormatter } from "../helpers/valueFormatter";
type AmountLabelProps ={
    amount:number;
    color:string;
}
export const AmountLabel = ({amount, color}:AmountLabelProps) => {
  return (
    <>
      <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
        <span className={`text-${color}`}>{valueFormatter(amount)}</span>
        
      </p>
    </>
  );
};
