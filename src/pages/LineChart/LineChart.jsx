import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, Typography } from '@mui/material'

const LineChart = () => {

  const data = [
    {
      "id": "japan",
      "data": [
        {
          "x": "plane",
          "y": 43
        },
        {
          "x": "helicopter",
          "y": 86
        },
        {
          "x": "boat",
          "y": 184
        },
        {
          "x": "train",
          "y": 80
        },
        {
          "x": "subway",
          "y": 179
        },
        {
          "x": "bus",
          "y": 113
        },
        {
          "x": "car",
          "y": 176
        },
        {
          "x": "moto",
          "y": 181
        },
        {
          "x": "bicycle",
          "y": 228
        },
        {
          "x": "horse",
          "y": 100
        },
        {
          "x": "skateboard",
          "y": 83
        },
        {
          "x": "others",
          "y": 166
        }
      ]
    },
    {
      "id": "france",
      "data": [
        {
          "x": "plane",
          "y": 92
        },
        {
          "x": "helicopter",
          "y": 137
        },
        {
          "x": "boat",
          "y": 69
        },
        {
          "x": "train",
          "y": 123
        },
        {
          "x": "subway",
          "y": 45
        },
        {
          "x": "bus",
          "y": 32
        },
        {
          "x": "car",
          "y": 95
        },
        {
          "x": "moto",
          "y": 208
        },
        {
          "x": "bicycle",
          "y": 144
        },
        {
          "x": "horse",
          "y": 217
        },
        {
          "x": "skateboard",
          "y": 165
        },
        {
          "x": "others",
          "y": 106
        }
      ]
    },
    {
      "id": "us",
      "data": [
        {
          "x": "plane",
          "y": 154
        },
        {
          "x": "helicopter",
          "y": 252
        },
        {
          "x": "boat",
          "y": 279
        },
        {
          "x": "train",
          "y": 285
        },
        {
          "x": "subway",
          "y": 170
        },
        {
          "x": "bus",
          "y": 279
        },
        {
          "x": "car",
          "y": 282
        },
        {
          "x": "moto",
          "y": 256
        },
        {
          "x": "bicycle",
          "y": 57
        },
        {
          "x": "horse",
          "y": 289
        },
        {
          "x": "skateboard",
          "y": 167
        },
        {
          "x": "others",
          "y": 140
        }
      ]
    },
    {
      "id": "germany",
      "data": [
        {
          "x": "plane",
          "y": 192
        },
        {
          "x": "helicopter",
          "y": 133
        },
        {
          "x": "boat",
          "y": 32
        },
        {
          "x": "train",
          "y": 282
        },
        {
          "x": "subway",
          "y": 273
        },
        {
          "x": "bus",
          "y": 30
        },
        {
          "x": "car",
          "y": 147
        },
        {
          "x": "moto",
          "y": 151
        },
        {
          "x": "bicycle",
          "y": 204
        },
        {
          "x": "horse",
          "y": 19
        },
        {
          "x": "skateboard",
          "y": 241
        },
        {
          "x": "others",
          "y": 130
        }
      ]
    },
    {
      "id": "norway",
      "data": [
        {
          "x": "plane",
          "y": 31
        },
        {
          "x": "helicopter",
          "y": 205
        },
        {
          "x": "boat",
          "y": 137
        },
        {
          "x": "train",
          "y": 27
        },
        {
          "x": "subway",
          "y": 9
        },
        {
          "x": "bus",
          "y": 21
        },
        {
          "x": "car",
          "y": 284
        },
        {
          "x": "moto",
          "y": 168
        },
        {
          "x": "bicycle",
          "y": 137
        },
        {
          "x": "horse",
          "y": 143
        },
        {
          "x": "skateboard",
          "y": 189
        },
        {
          "x": "others",
          "y": 27
        }
      ]
    }
  ] 
  return (
    <>
    <Box sx={{height : "75vh"}}>
      <Typography sx={{color:"red" , textAlign : "center" , fontSize:24 , pt:"50px"}}>
                Line Chart Analysis
              </Typography>
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
    />
    </Box>
    </>
  )
}

export default LineChart