/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myBarChart')
  // eslint-disable-next-line no-unused-vars
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          5,
          10,
          20,
          30,
          40,
          50,
          60,
          70
        ],
        lineTension: 0,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}());

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myLineChart')
  // eslint-disable-next-line no-unused-vars
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}());


(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myHorizBarChart')
  // eslint-disable-next-line no-unused-vars
  var myHorizBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          10,
          20,
          30,
          40,
          50,
          60,
          70
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#009938',
        borderWidth: 1,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}());

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myMixedChart')
  // eslint-disable-next-line no-unused-vars
  var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            // this dataset is drawn below
            order: 1
        }, {
            label: 'Line Dataset',
            data: [50, 40, 30, 20],
            type: 'line',
            // this dataset is drawn on top
            order: 2
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {}
});
}());

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myPieChart')
  // eslint-disable-next-line no-unused-vars
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
    datasets: [{
       data: [10, 20, 30],
       backgroundColor : ['#aaaa12', '#1384a7', '#ff1277'],
       borderColor : ['#084B8A', '#111342', '#fff222'],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
},
    options: {}
});
}());

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myDoughnutChart')
  // eslint-disable-next-line no-unused-vars
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [10, 20, 30],
         borderColor : ['#084B8A', '#111342', '#fff222'],
         backgroundColor : ['#084B8A', '#111342', '#fff222'],
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
    },
    options: {}
});
}());