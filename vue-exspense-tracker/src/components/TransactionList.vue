<template>
    <h3>
        History
    </h3>
    <ul id="list" class="list">
        <li 
        v-for="transaction in transactions" 
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'minus' : 'plus'"
        >
        {{transaction.text}} <span>${{ transaction.amount }}</span>
        <button class ="delete-btn" @click="deleteTransaction(transaction.id)">X</button>
        </li>
    </ul>
</template>

<script setup>
    import { defineProps } from 'vue'

    const emit = defineEmits(['deleteTransaction'])

    const props = defineProps({
        transactions: {
            type: Array,
            required: true
        }
    })

    const deleteTransaction = (id) => {
        emit('deleteTransaction', id);
    }
</script>
