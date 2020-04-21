import Chart from 'chart.js';

$(document).ready(function () {
  // Line chart
  const ctx1 = document.getElementById('grossIncomeChart').getContext('2d');
  const myChart = new Chart(ctx1, {
    type: 'line',

    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'Jun',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Income',
          borderColor: '#5d78ff',
          backgroundColor: '#5d78ff',
          data: [3, 2, 3, 5, 6, 5, 4, 6, 9, 10, 8, 9],
        },
        {
          label: 'Revenue',
          borderColor: '#f2f3f8',
          backgroundColor: '#f2f3f8',
          data: [5, 4, 10, 15, 16, 12, 10, 13, 20, 22, 18, 20],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        titleFontFamily: "'Poppins', Helvetica, sans-serif",
        titleFontSize: 10,
        bodyFontFamily: "'Poppins', Helvetica, sans-serif",
        bodyFontSize: 10,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            //display: false,
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontSize: 10,
            },
          },
        ],
        xAxes: [
          {
            //display: false,
            gridLines: {
              display: false,
            },
            ticks: {
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontSize: 10,
            },
          },
        ],
      },
    },
  });

  // doughnut chart
  const ctx2 = document
    .getElementById('revenueBreakdownByCities')
    .getContext('2d');
  var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [10, 20, 30, 40, 50],
          backgroundColor: [
            '#fd397a',
            '#ffb822',
            '#5d78ff',
            '#0abb87',
            '#6f42c1',
          ],
        },
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Los Angeles',
        'New York',
        'Washington, D.C.',
        'Texas',
        'Boston',
      ],
    },
    options: {
      tooltips: {
        titleFontFamily: "'Poppins', Helvetica, sans-serif",
        bodyFontFamily: "'Poppins', Helvetica, sans-serif",
      },
      maintainAspectRatio: false,
      cutoutPercentage: 50,
      legend: {
        display: false,
      },
    },
  });
});
