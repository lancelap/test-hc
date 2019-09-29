import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

export default function Chart(props) {
  const { campaign, data, dateRange: { startDate, endDate } } = props;
  const dataChart = data[campaign].reduce((acc, current) => {
    if(!moment(current['Date']).isBetween(startDate, endDate, null, '[]')) {
      return acc;
    }
    
    const currentObj = current["FormatDate"];
    acc.categories.push(currentObj);
    acc.series['ADS_FIVE_WATCHED'].data.push(current["ADS_FIVE_WATCHED"]);
    acc.series['ADS_VIDEOAD_WATCHED'].data.push(current["ADS_VIDEOAD_WATCHED"]);
    acc.series['Add_Friend_Request'].data.push(current["Add_Friend_Request"]);
    return acc
  }, {
    categories: [],
    series: {
      ADS_FIVE_WATCHED: {
        name: 'ADS_FIVE_WATCHED',
        type: 'spline',
        yAxis: 1,
        marker: {
          enabled: true
        },
        data: []
      },
      ADS_VIDEOAD_WATCHED: {
        name: 'ADS_VIDEOAD_WATCHED',
        type: 'spline',
        yAxis: 2,
        data: [],
        marker: {
          enabled: true
        },
        dashStyle: 'shortdot'
      },
      Add_Friend_Request: {
        name: 'Add_Friend_Request',
        type: 'spline',
        marker: {
          enabled: true
        },
        data: []
      }
    },
  });

  const options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: campaign,
      align: 'center'
    },
    xAxis: [
      {
        categories: dataChart.categories,
        crosshair: true
      }
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        title: {
          text: 'Add Friend Request',
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
          text: 'ADS FIVE WATCHED',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        }
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'ADS VIDEOAD WATCHED',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
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
    series: Object.values(dataChart.series),
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
