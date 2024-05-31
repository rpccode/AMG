export interface Budget {
    id?: string;
    name?: string;
    budget: number;
    spent?: number;
    percentage?: number;
    start_date?: string;
    end_date?: string;
    category?: string;
    type?: string;
    description?: string;
    status?: boolean;
    icon?: string;

}