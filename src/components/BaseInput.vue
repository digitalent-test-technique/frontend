<template>
  <label class="form-group d-block">
    <p class="mb-2">{{ label }} <span class="text-danger">*</span></p>
    <input
      v-model="value"
      class="form-control"
      :type="type"
      :placeholder="placeholder"
      required />
  </label>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    placeholder: String,
  });

  const emit = defineEmits(['update:modelValue']);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>

<style lang="scss"></style>
