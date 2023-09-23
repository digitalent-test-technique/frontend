<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>Utilisation de l'API</h3>
        <bar :data="barData"></bar>
      </div>
      <div class="col-md-6">
        <h3>Appareils</h3>
        <pie
          :data="pieData"
          :options="{
            maintainAspectRatio: true,
          }">
        </pie>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
  } from 'chart.js';
  import { Bar, Pie } from 'vue-chartjs';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

  const barData = ref({
    datasets: [],
  });
  const pieData = ref({
    datasets: [],
  });
  onMounted(() => {
    // we can get the from API
    barData.value = {
      labels: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      datasets: [
        {
          label: '1k requêtes',
          backgroundColor: '#007bff',
          data: [50, 68, 47, 58, 95, 14, 71, 23, 47, 30, 94, 2],
        },
      ],
    };
    pieData.value = {
      labels: ['téléphone', 'tablette', 'desktop'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
          data: [750, 470, 300],
        },
      ],
    };
  });
</script>

<style lang="scss"></style>
