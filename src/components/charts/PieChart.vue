<script>
  import { Pie } from 'vue-chartjs'

  export default {
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: ["Approval", "Padding Approval", "7 day report", "Project",],
          datasets: [{
              borderWidth: 1,
              borderColor: [
              'rgba(102, 102, 102)',
              'rgba(102, 102, 102)',
              'rgba(102, 102, 102)',
              'rgba(102, 102, 102)'
              ],
              backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',                
              ],
              data: [100,	50,	20,	10]
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>