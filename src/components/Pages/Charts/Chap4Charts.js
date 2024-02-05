import React, { useContext } from 'react';
import { MyContext } from '../../../Context/MyProvider';
import './Charts.css'
import Card from "@material-ui/core/Card";
import { CustomBarChart } from './CustomChart/CustomBarChart';
import { makeStyles } from "@material-ui/core/styles";
import { CustomBarhChart } from './CustomChart/CustomBarhChart';




const useStyles = makeStyles({
  cardColored: {
    margin: '20px 20 20px 20',
    padding: "10px 0 10px 0",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(225,227,225,0.5)",
  }, 
  cardMargin: {
    margin: '20px 0 20px 0',
    padding: "10px 0 10px 0",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  }
});

const colorScheme = ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c", "7f5539", "baba08", "bde0fe"]


export const Chart1 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts4

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart1.map((item) => Object.keys(item))[0].length - 1; i++) {
      chartTwo.push(
          
          {
            
            // x: chart.Chart1.map((item) => item.month),
            // y: chart.Chart1.map((item) => Object.values(item)[i]),
          y: chart.Chart1.map((it) => it[chart.Chart1.map((item) => Object.keys(item))[0][0]]),

          x: chart.Chart1.map((it) => it[chart.Chart1.map((item) => Object.keys(item))[0][1]]),
          text: ["Medical and Public Health"," Sports and Youth Services", "Information"],
          textposition: 'auto',
          type: 'bar',
          width: 0.8,
          
          
          name: chart.Chart1.map((item) => Object.keys(item))[0][0],
          
        
          hoverinfo: 'y',
          orientation: 'h',
          marker: {
            color: colorScheme[i],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1
            }
          }
        })
    }
    return chartTwo
  }

  return (
    char.themeChanger
      ?
      <Card className={classes.cardColored}>
        <CustomBarhChart
          data={kastam()}
          title="Chart 4.1: Department wise outstanding Utilisation Certificates"
          xaxisTitle="Outstanding value of Utlization Certificates"
          yaxisTitle="Name of the Department"
          legendX="1"
          legendY="1"
          
          
        /></Card> 
      : <Card > 
        <CustomBarhChart
          data={kastam()}
          title="Chart 4.1: Department wise outstanding Utilisation Certificates"
          xaxisTitle="Outstanding value of Utlization Certificates"
          yaxisTitle="Name of the Department"
          rangeStart="0"
          rangeEnd="350"
          step="50"
          
        />
      </Card>
  );
}
export const Chart2 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts4

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart2.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          y: chart.Chart2.map((it) => it[chart.Chart2.map((item) => Object.keys(item))[0][0]]),
          x: chart.Chart2.map((it) => it[chart.Chart2.map((item) => Object.keys(item))[0][1]]),
          type: 'bar',
         
          width: 0.8,  
          labels: chart.Chart2.map(item => item.Name),  
          values: chart.Chart2.map(item => Object.values(item)[i]),
          
          name: chart.Chart2.map((item) => Object.keys(item))[0][0],
          hoverinfo: 'y',
          hoverinfo: 'x',
          mode: "markers+lines+text",
          textposition: "auto",
          orientation: 'h',
          marker: {
            color: colorScheme[i],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
          }
        })
    }
    return chartTwo
  }

  return (
    char.themeChanger
      ?
      <Card className={classes.cardColored}>
        <CustomBarhChart
          data={kastam()}
          title="Chart 4.2: Pending NDC Bills in respecvt of Major Departments"
          xaxisTitle="Amount in Crore"
          yaxisTitle="Name of the Department"
          xrangeStart="0"
          xrangeEnd="800"
          xstep="100"
          legendY = "80"
          legendX = "80"
        /></Card> 
      : <Card >
        <CustomBarChart
          data={kastam()}
          title="Chart 4.2: Pending NDC Bills in respecvt of Major Departments"
          xaxisTitle="Amount in Crore"
          xrangeStart="0"
          xrangeEnd="800"
          xstep="100"
          legendY = "80"
          legendX = "80"
        />
      </Card>
  );
}
              
export const Chart3 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts4

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart3.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          y: chart.Chart3.map((it) => it[chart.Chart3.map((item) => Object.keys(item))[0][0]]),
          x: chart.Chart3.map((it) => it[chart.Chart3.map((item) => Object.keys(item))[0][1]]),
          type: 'bar',
         
          width: 0.8,  
          labels: chart.Chart3.map(item => item.Name),
          values: chart.Chart3.map(item => Object.values(item)[i]),
          
          name: chart.Chart3.map((item) => Object.keys(item))[0][0],
          hoverinfo: 'y',
          hoverinfo: 'x',
          mode: "markers+lines+text",
          textposition: "auto",
          orientation: 'h',
          marker: {
            color: colorScheme[i],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
          }
        })
    }
    return chartTwo
  }

  return (
    char.themeChanger
      ?
      <Card className={classes.cardColored}>
        <CustomBarhChart
          data={kastam()}
          title="Chart 4.3 Status of reconciliation during the last three years 2018-21"
          xaxisTitle=""
          yaxisTitle=""
          xrangeStart="0"
          xrangeEnd="800"
          xstep="100"   
          legendY = "80"
          legendX = "80"
        /></Card> 
      : <Card >
        <CustomBarChart
          data={kastam()}
          title="Chart 4.3 Status of reconciliation during the last three years 2018-21"
          xaxisTitle=""
          xrangeStart="0"
          xrangeEnd="300000"
          xstep="50000"                      
          legendY = ""
          legendX = ""
        />
      </Card>
  );
}


