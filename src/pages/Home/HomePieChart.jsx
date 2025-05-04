import { Box } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

const data =[
    {
      "id": "lisp",
      "label": "lisp",
      "value": 3,
      "color": "hsl(154, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 212,
      "color": "hsl(106, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 160,
      "color": "hsl(157, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 442,
      "color": "hsl(250, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 401,
      "color": "hsl(59, 70%, 50%)"
    }
  ]
import React from 'react'

export default function HomePieChart() {
  return (
    <>
    <Box sx={{height:"70px" , width:"70px"}}>
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set1' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
    </Box>

    </>
  )
}

