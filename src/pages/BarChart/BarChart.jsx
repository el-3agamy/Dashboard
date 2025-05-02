import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material';

const BarChart = () => {
    const data = [
        {
          year: 2019,
          Spain: 900,
          France: 1400,
          Germany: 1700,
        },
      
        {
          year: 2020,
          Spain: 1000,
          France: 1500,
          Germany: 1800,
        },
      
        {
          year: 2021,
          Spain: 1100,
          France: 1600,
          Germany: 1900,
        },
      
        {
          year: 2022,
          Spain: 1200,
          France: 1700,
          Germany: 2000,
        },
      
        {
          year: 2023,
          Spain: 1260,
          France: 1709,
          Germany: 2080,
        },
      ];
      
  return(
    <>
    <Box sx={{height : "75vh"}}>

    <ResponsiveBar
        data={data}
        keys={[
            'Spain',
            'France',
            'Germany',
            
        ]}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'blue_green' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendPosition: 'middle',
            legendOffset: 42,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Salary / Month',
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0,
        
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>`${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
    />
    </Box>
    </>
  )

}

export default BarChart