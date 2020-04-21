import Chart from 'chart.js';

$(document).ready(function () {
  const ctx = document.getElementById('grossIncomeChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',

    data: {
      labels: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
      ],
      datasets: [
        {
          label: 'درآمد خالص',
          borderColor: '#5d78ff',
          backgroundColor: '#5d78ff',
          data: [3, 2, 3, 5, 6, 5, 4, 6, 9, 10, 8, 9],
        },
        {
          label: 'درآمد ناخالص',
          borderColor: '#f2f3f8',
          backgroundColor: '#f2f3f8',
          data: [5, 4, 10, 15, 16, 12, 10, 13, 20, 22, 18, 20],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        titleFontFamily: "'Vazir', sans-serif",
        bodyFontFamily: "'Vazir', sans-serif",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            //display: false,
            position: 'right',
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            //display: false,
            offset: true,
            reverse: true,
            gridLines: {
              display: false,
            },
            ticks: {
              reverse: true,
              fontFamily: "'Vazir', sans-serif",
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
      labels: ['تهران', 'مشهد', 'اصفهان', 'شیراز', 'کیش'],
    },
    options: {
      tooltips: {
        titleFontFamily: "'Vazir', sans-serif",
        bodyFontFamily: "'Vazir', sans-serif",
      },
      maintainAspectRatio: false,
      cutoutPercentage: 50,
      legend: {
        display: false,
      },
    },
  });
});
