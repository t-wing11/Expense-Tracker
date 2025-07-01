<template>
    <Header />
    <div class="container">
        <Balance :total="+total" />
        <IncomeExpense :income="+income" :expense="+expense" />
        <TransactionList :transactions="transactions"  @deleteTransaction="deleteTransaction" />
        <AddTransaction @add-transaction="addTransaction" />
    </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

import { calculations } from './components/calculations'
import { manageTransactions } from './components/manageTransactions'
import { ref } from 'vue';

const transactions = ref([]);

const { total, income, expense } = calculations(transactions);
const { addTransaction, deleteTransaction } = manageTransactions(transactions);

</script>

