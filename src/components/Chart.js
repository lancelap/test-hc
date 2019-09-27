import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Chart(props) {
  const { campaign, data } = props;
  console.log(data, campaign)
  // const series = data[campaign].reduce((acc, current) => {
  //   return acc
  // }, {
  //   ADS_FIVE_WATCHED: {
  //     name: 'ADS_FIVE_WATCHED',
  //     type: 'spline',
  //     yAxis: 1,
  //     marker: {
  //       enabled: true
  //     },
  //     data: []
  //   },
  //   ADS_VIDEOAD_WATCHED: {
  //     name: 'ADS_VIDEOAD_WATCHED',
  //     type: 'spline',
  //     yAxis: 2,
  //     data: [],
  //     marker: {
  //       enabled: true
  //     },
  //     dashStyle: 'shortdot'
  //   },
  //   Add_Friend_Request: {
  //     name: 'Add_Friend_Request',
  //     type: 'spline',
  //     marker: {
  //       enabled: true
  //     },
  //     data: []
  //   }
  // });

  // const serie1s = [
  //   {
  //     name: 'ADS_FIVE_WATCHED',
  //     type: 'spline',
  //     yAxis: 1,
  //     marker: {
  //       enabled: true
  //     },
  //     data: []
  //   },
  //   {
  //     name: 'ADS_VIDEOAD_WATCHED',
  //     type: 'spline',
  //     yAxis: 2,
  //     data: [],
  //     marker: {
  //       enabled: true
  //     },
  //     dashStyle: 'shortdot'
  //   },
  //   {
  //     name: 'Add_Friend_Request',
  //     type: 'spline',
  //     marker: {
  //       enabled: true
  //     },
  //     data: []
  //   }
  // ];

  const options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Weather Data for Tokyo',
      align: 'left'
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      align: 'left'
    },
    xAxis: [
      {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
      }
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        opposite: true
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Rainfall',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        }
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Sea-Level Pressure',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          format: '{value} mb',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.25)' // theme
    },
    series: [],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              floating: false,
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              x: 0,
              y: 0
            },
            yAxis: [
              {
                labels: {
                  align: 'right',
                  x: 0,
                  y: -6
                },
                showLastLabel: false
              },
              {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -6
                },
                showLastLabel: false
              },
              {
                visible: false
              }
            ]
          }
        }
      ]
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
