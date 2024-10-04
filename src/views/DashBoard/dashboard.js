const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Line Dataset',
      backgroundColor: '#ffffff',
      fill: false,
      borderColor: '#ffffff',
      data: [28, 48, 40, 19, 86, 27, 90]
    },
    {
      type: 'bar',
      label: 'taskDone',
      backgroundColor: '#67f373',
      borderColor: 'rgba(999, 999, 999, 1)',
      borderWidth: 1,
      data: [65, 59, 30, 81, 56, 55, 40]
    },
    {
      type: 'bar',
      label: 'taskNotDone',
      backgroundColor: '#f9d94b',
      borderColor: 'rgba(999, 999, 999, 1)',
      borderWidth: 1,
      data: [10, 40, 80, 20, 15, 20, 20]
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    }
  }
})
