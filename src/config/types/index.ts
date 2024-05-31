import { z } from "zod";
export type Expensses = {
    id:string;
    budgetId:string;
    expensesName:string;
    amount: number;
    category:string
    expensesDate:value;
    date:value

}


export type DraftExpense = Omit<Expensses, 'id'>

type ValuePiece = Date | null;
export type value = ValuePiece | [ValuePiece, ValuePiece]


// Projects

export const ExpesseSchema = z.object({

    id: z.string(),
    budgetId:z.string(),
    expensesName:z.string(),
    amount: z.number().positive('El monto del gasto debe ser mayor a 0').min(0.01, 'El monto del gasto debe ser mayor a 0'),
    category:z.string(),    
    expensesDate:z.date(),
    date:z.date()
})

export type Expesse = z.infer<typeof ExpesseSchema>
export type ExpesseFormData = Pick<Expesse, 'expensesName'|'amount'|'category'|'expensesDate'>