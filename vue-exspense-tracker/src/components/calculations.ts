import { computed } from 'vue';
import type { Ref } from 'vue';

// Define the Transaction type if not already defined elsewhere
type Transaction = {
    id: number;
    text: string;
    amount: number;
};

export function calculations(transactions: Ref<Transaction[]>) {

    const total = computed(() => {
        return transactions.value.reduce((acc, transaction) => {
            return acc + transaction.amount;
        }, 0);
    })

    const income = computed(() => {
        return transactions.value
            .filter((transaction) => transaction.amount > 0)
            .reduce((acc, transaction) => {return acc + transaction.amount;}, 0);
    });

    const expense = computed(() => {
        return transactions.value 
            .filter((transaction) => transaction.amount < 0)
            .reduce((acc, transaction) => {return acc + transaction.amount;}, 0);
    });

    return {
        total,
        income,
        expense,
    };
}

