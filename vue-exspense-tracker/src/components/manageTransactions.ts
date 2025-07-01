import { onMounted } from 'vue';
import type { Ref } from 'vue';
import { useToast } from 'vue-toastification';
import api from './api'; 

// Define the Transaction type if not already defined elsewhere
type Transaction = {
    id: number;
    text: string;
    amount: number;
};

export function manageTransactions(transactions: Ref<Transaction[]>) {
    const toast = useToast();
    
    onMounted(async () => {
        try {
            const response = await api.get('/expenses');
            transactions.value = response.data;
        } catch (error) {
            toast.error('Failed to fetch transactions');
        }
    });

    const addTransaction = async (transactionData: { text: string; amount: number }) => {
        try {
            const response = await api.post('/expenses', transactionData);
            transactions.value.push(response.data);
            toast.success('Transaction added successfully');
        } catch (error) {
            toast.error('Failed to add transaction');
        }
    };

    const deleteTransaction = async (id: number) => {
        try {
            await api.delete(`/expenses/${id}`);
            transactions.value = transactions.value.filter(transaction => transaction.id !== id);
            toast.success('Transaction deleted successfully');
        } catch (error) {
            toast.error('Failed to delete transaction');
        }
    };

    return {
        addTransaction,
        deleteTransaction
    };
}

