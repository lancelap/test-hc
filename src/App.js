import React from 'react';
import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts';
import data from './data.json';

import HighchartsReact from 'highcharts-react-official';

const options =  {
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
  xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
  }],
  yAxis: [{ // Primary yAxis
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

  }, { // Secondary yAxis
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

  }, { // Tertiary yAxis
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
  }],
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
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)'
  },
  series: [{
      name: 'Rainfall',
      type: 'spline',
      yAxis: 1,
      marker: {
          enabled: true
      },
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
          valueSuffix: ' mm'
      }

  }, {
      name: 'Sea-Level Pressure',
      type: 'spline',
      yAxis: 2,
      data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
      marker: {
          enabled: true
      },
      dashStyle: 'shortdot',
      tooltip: {
          valueSuffix: ' mb'
      }

  }, {
      name: 'Temperature',
      type: 'spline',
      marker: {
        enabled: true
      },
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
          valueSuffix: ' °C'
      }
  }],
  responsive: {
      rules: [{
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
              yAxis: [{
                  labels: {
                      align: 'right',
                      x: 0,
                      y: -6
                  },
                  showLastLabel: false
              }, {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -6
                  },
                  showLastLabel: false
              }, {
                  visible: false
              }]
          }
      }]
  }
}

const opt = [
  {
    "Channel": { "type": "string" },
    "Date": { "type": "date string" },
    "Media Source": { "type": "string" },
    "ADS_FIVE_WATCHED": { "type": "number" },
    "ADS_VIDEOAD_WATCHED": { "type": "number" },
    "Add_Friend_Request": { "type": "number" },
    "Click_Gifts": { "type": "number" },
    "Click_Messages": { "type": "number" },
    "CompleteGames": { "type": "number" },
    "Complete_Send_Gifts": { "type": "number" },
    "LAUNCH_REGISTRATION_COMPLETED": { "type": "number" },
    "PRESTIGE_RESET_ACCEPTED": { "type": "number" },
    "SCREEN_LEAGUE_COMPLETED": { "type": "number" },
    "SHOP_PURCHASE_ADDED": { "type": "number" },
    "SHOP_PURCHASE_UNFINISHED": { "type": "number" },
    "Start_PK_Game": { "type": "number" },
    "TUTORIAL_STEP_COMPLETED": { "type": "number" },
    "UNIQUE_FIRST_PURCHASE": { "type": "number" },
    "Visit_Other_Profile": { "type": "number" },
    "add_friend": { "type": "number" },
    "entergame": { "type": "number" },
    "install": { "type": "number" },
    "loginsuccess": { "type": "number" },
    "stage_completed": { "type": "number" },
    "ten_games": { "type": "number" },
    "SHOP_PURCHASE_ADDED revenue, USD": { "type": "number" },
    "UNIQUE_FIRST_PURCHASE revenue, USD": { "type": "number" },
    "Campaign": { "type": "string" },
    "Impressions": { "type": "number" },
    "Clicks": { "type": "number" },
    "Cost": { "type": "number" },
    "Partner": { "type": "string" },
    "Platform": { "type": "string" }
  },
  {
    "Channel": "Display Network",
    "Date": "2019-06-12T00:00:00.000Z",
    "Media Source": "googleadwords_int",
    "ADS_FIVE_WATCHED": 71.0,
    "ADS_VIDEOAD_WATCHED": 2134.0,
    "Add_Friend_Request": 0.0,
    "Click_Gifts": 0.0,
    "Click_Messages": 0.0,
    "CompleteGames": 0.0,
    "Complete_Send_Gifts": 0.0,
    "LAUNCH_REGISTRATION_COMPLETED": 544.0,
    "PRESTIGE_RESET_ACCEPTED": 0.0,
    "SCREEN_LEAGUE_COMPLETED": 107.0,
    "SHOP_PURCHASE_ADDED": 4.0,
    "SHOP_PURCHASE_UNFINISHED": 21.0,
    "Start_PK_Game": 0.0,
    "TUTORIAL_STEP_COMPLETED": 88.0,
    "UNIQUE_FIRST_PURCHASE": 3.0,
    "Visit_Other_Profile": 0.0,
    "add_friend": 0.0,
    "entergame": 0.0,
    "install": 568.0,
    "loginsuccess": 0.0,
    "stage_completed": 1012.0,
    "ten_games": 0.0,
    "SHOP_PURCHASE_ADDED revenue, USD": 10.96,
    "UNIQUE_FIRST_PURCHASE revenue, USD": 0.0,
    "Campaign": "campaign_1",
    "Impressions": 554471.0,
    "Clicks": 6950.0,
    "Cost": 99.1456,
    "Partner": "SOCIARO",
    "Platform": "Android"
  },
  {
    "Channel": "Display Network",
    "Date": "2019-06-12T00:00:00.000Z",
    "Media Source": "googleadwords_int",
    "ADS_FIVE_WATCHED": 0.0,
    "ADS_VIDEOAD_WATCHED": 1.0,
    "Add_Friend_Request": 0.0,
    "Click_Gifts": 0.0,
    "Click_Messages": 0.0,
    "CompleteGames": 0.0,
    "Complete_Send_Gifts": 0.0,
    "LAUNCH_REGISTRATION_COMPLETED": 7.0,
    "PRESTIGE_RESET_ACCEPTED": 0.0,
    "SCREEN_LEAGUE_COMPLETED": 1.0,
    "SHOP_PURCHASE_ADDED": 0.0,
    "SHOP_PURCHASE_UNFINISHED": 0.0,
    "Start_PK_Game": 0.0,
    "TUTORIAL_STEP_COMPLETED": 1.0,
    "UNIQUE_FIRST_PURCHASE": 0.0,
    "Visit_Other_Profile": 0.0,
    "add_friend": 0.0,
    "entergame": 0.0,
    "install": 7.0,
    "loginsuccess": 0.0,
    "stage_completed": 19.0,
    "ten_games": 0.0,
    "SHOP_PURCHASE_ADDED revenue, USD": 0.0,
    "UNIQUE_FIRST_PURCHASE revenue, USD": 0.0,
    "Campaign": "campaign_65",
    "Impressions": 1414.0,
    "Clicks": 20.0,
    "Cost": 5.1302,
    "Partner": "SOCIARO",
    "Platform": "Android"
  },
]

// const acc = opt.reduce((acc, current) => {
//   return acc[current[""]]
// }, {});
// console.log('data', acc)


function App() {
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default App;
