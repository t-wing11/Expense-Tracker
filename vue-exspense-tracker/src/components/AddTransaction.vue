<template>
    <h3> Add new transaction </h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
            <label for="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
            >
            <input type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup>

import { useToast } from 'vue-toastification';
import { ref } from 'vue';
  const text = ref('');
  const amount = ref('');

  const emit = defineEmits(['addTransaction']);

  const toast = useToast();

  const onSubmit = () => {
    if (!text.value || !amount.value) {
        toast.error('Please add text and amount');
        return;
    }

    if (isNaN(amount.value)) {
        toast.error('Amount must be a number');
        return;
    }
    const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value)
    }

    emit('addTransaction', transactionData);

    text.value = '';
    amount.value = '';
  };
</script>