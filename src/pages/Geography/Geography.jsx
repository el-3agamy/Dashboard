import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box } from '@mui/material'
import geo from './WorldData'

const Geography = () => {

  const data = [
    {
      "id": "AFG",
      "value": 946078
    },
    {
      "id": "AGO",
      "value": 357016
    },
    {
      "id": "ALB",
      "value": 738085
    },
    {
      "id": "ARE",
      "value": 651332
    },
    {
      "id": "ARG",
      "value": 79757
    },
    {
      "id": "ARM",
      "value": 905329
    },
    {
      "id": "ATA",
      "value": 162857
    },
    {
      "id": "ATF",
      "value": 43972
    },
    {
      "id": "AUT",
      "value": 399186
    },
    {
      "id": "AZE",
      "value": 640760
    },
    {
      "id": "BDI",
      "value": 905702
    },
    {
      "id": "BEL",
      "value": 122430
    },
    {
      "id": "BEN",
      "value": 485462
    },
    {
      "id": "BFA",
      "value": 488709
    },
    {
      "id": "BGD",
      "value": 482091
    },
    {
      "id": "BGR",
      "value": 482755
    },
    {
      "id": "BHS",
      "value": 980627
    },
    {
      "id": "BIH",
      "value": 30362
    },
    {
      "id": "BLR",
      "value": 491508
    },
    {
      "id": "BLZ",
      "value": 275062
    },
    {
      "id": "BOL",
      "value": 639890
    },
    {
      "id": "BRN",
      "value": 366611
    },
    {
      "id": "BTN",
      "value": 565493
    },
    {
      "id": "BWA",
      "value": 158534
    },
    {
      "id": "CAF",
      "value": 468747
    },
    {
      "id": "CAN",
      "value": 599427
    },
    {
      "id": "CHE",
      "value": 747050
    },
    {
      "id": "CHL",
      "value": 338077
    },
    {
      "id": "CHN",
      "value": 297818
    },
    {
      "id": "CIV",
      "value": 70955
    },
    {
      "id": "CMR",
      "value": 768856
    },
    {
      "id": "COG",
      "value": 831131
    },
    {
      "id": "COL",
      "value": 508898
    },
    {
      "id": "CRI",
      "value": 551562
    },
    {
      "id": "CUB",
      "value": 428370
    },
    {
      "id": "-99",
      "value": 980778
    },
    {
      "id": "CYP",
      "value": 265998
    },
    {
      "id": "CZE",
      "value": 471787
    },
    {
      "id": "DEU",
      "value": 365195
    },
    {
      "id": "DJI",
      "value": 581678
    },
    {
      "id": "DNK",
      "value": 506737
    },
    {
      "id": "DOM",
      "value": 704934
    },
    {
      "id": "DZA",
      "value": 377486
    },
    {
      "id": "ECU",
      "value": 378262
    },
    {
      "id": "EGY",
      "value": 286234
    },
    {
      "id": "ERI",
      "value": 382198
    },
    {
      "id": "ESP",
      "value": 39798
    },
    {
      "id": "EST",
      "value": 362256
    },
    {
      "id": "ETH",
      "value": 578724
    },
    {
      "id": "FIN",
      "value": 658192
    },
    {
      "id": "FJI",
      "value": 620533
    },
    {
      "id": "FLK",
      "value": 713016
    },
    {
      "id": "FRA",
      "value": 540451
    },
    {
      "id": "GAB",
      "value": 735913
    },
    {
      "id": "GBR",
      "value": 784227
    },
    {
      "id": "GEO",
      "value": 422909
    },
    {
      "id": "GHA",
      "value": 571899
    },
    {
      "id": "GIN",
      "value": 442890
    },
    {
      "id": "GMB",
      "value": 43067
    },
    {
      "id": "GNB",
      "value": 136810
    },
    {
      "id": "GNQ",
      "value": 88752
    },
    {
      "id": "GRC",
      "value": 433090
    },
    {
      "id": "GTM",
      "value": 72927
    },
    {
      "id": "GUY",
      "value": 945872
    },
    {
      "id": "HND",
      "value": 991145
    },
    {
      "id": "HRV",
      "value": 774358
    },
    {
      "id": "HTI",
      "value": 523583
    },
    {
      "id": "HUN",
      "value": 290461
    },
    {
      "id": "IDN",
      "value": 723220
    },
    {
      "id": "IND",
      "value": 10176
    },
    {
      "id": "IRL",
      "value": 543247
    },
    {
      "id": "IRN",
      "value": 901321
    },
    {
      "id": "IRQ",
      "value": 960862
    },
    {
      "id": "ISL",
      "value": 864427
    },
    {
      "id": "ISR",
      "value": 417361
    },
    {
      "id": "ITA",
      "value": 468023
    },
    {
      "id": "JAM",
      "value": 872758
    },
    {
      "id": "JOR",
      "value": 799465
    },
    {
      "id": "JPN",
      "value": 113032
    },
    {
      "id": "KAZ",
      "value": 579007
    },
    {
      "id": "KEN",
      "value": 777990
    },
    {
      "id": "KGZ",
      "value": 813885
    },
    {
      "id": "KHM",
      "value": 487580
    },
    {
      "id": "OSA",
      "value": 392628
    },
    {
      "id": "KWT",
      "value": 547390
    },
    {
      "id": "LAO",
      "value": 416937
    },
    {
      "id": "LBN",
      "value": 88011
    },
    {
      "id": "LBR",
      "value": 347929
    },
    {
      "id": "LBY",
      "value": 136182
    },
    {
      "id": "LKA",
      "value": 223748
    },
    {
      "id": "LSO",
      "value": 844451
    },
    {
      "id": "LTU",
      "value": 526876
    },
    {
      "id": "LUX",
      "value": 436788
    },
    {
      "id": "LVA",
      "value": 333566
    },
    {
      "id": "MAR",
      "value": 874892
    },
    {
      "id": "MDA",
      "value": 798967
    },
    {
      "id": "MDG",
      "value": 112907
    },
    {
      "id": "MEX",
      "value": 427314
    },
    {
      "id": "MKD",
      "value": 639876
    },
    {
      "id": "MLI",
      "value": 893088
    },
    {
      "id": "MMR",
      "value": 644785
    },
    {
      "id": "MNE",
      "value": 136886
    },
    {
      "id": "MNG",
      "value": 425536
    },
    {
      "id": "MOZ",
      "value": 450880
    },
    {
      "id": "MRT",
      "value": 371763
    },
    {
      "id": "MWI",
      "value": 730013
    },
    {
      "id": "MYS",
      "value": 886940
    },
    {
      "id": "NAM",
      "value": 126978
    },
    {
      "id": "NCL",
      "value": 335065
    },
    {
      "id": "NER",
      "value": 375027
    },
    {
      "id": "NGA",
      "value": 458963
    },
    {
      "id": "NIC",
      "value": 405797
    },
    {
      "id": "NLD",
      "value": 92027
    },
    {
      "id": "NOR",
      "value": 988006
    },
    {
      "id": "NPL",
      "value": 302
    },
    {
      "id": "NZL",
      "value": 905911
    },
    {
      "id": "OMN",
      "value": 566044
    },
    {
      "id": "PAK",
      "value": 486047
    },
    {
      "id": "PAN",
      "value": 662563
    },
    {
      "id": "PER",
      "value": 804567
    },
    {
      "id": "PHL",
      "value": 127078
    },
    {
      "id": "PNG",
      "value": 621226
    },
    {
      "id": "POL",
      "value": 790030
    },
    {
      "id": "PRI",
      "value": 939407
    },
    {
      "id": "PRT",
      "value": 64373
    },
    {
      "id": "PRY",
      "value": 813691
    },
    {
      "id": "QAT",
      "value": 966730
    },
    {
      "id": "ROU",
      "value": 71131
    },
    {
      "id": "RUS",
      "value": 305233
    },
    {
      "id": "RWA",
      "value": 796789
    },
    {
      "id": "ESH",
      "value": 738193
    },
    {
      "id": "SAU",
      "value": 392966
    },
    {
      "id": "SDN",
      "value": 190679
    },
    {
      "id": "SDS",
      "value": 181664
    },
    {
      "id": "SEN",
      "value": 469476
    },
    {
      "id": "SLB",
      "value": 702790
    },
    {
      "id": "SLE",
      "value": 396202
    },
    {
      "id": "SLV",
      "value": 701270
    },
    {
      "id": "ABV",
      "value": 454471
    },
    {
      "id": "SOM",
      "value": 654381
    },
    {
      "id": "SRB",
      "value": 245426
    },
    {
      "id": "SUR",
      "value": 446802
    },
    {
      "id": "SVK",
      "value": 559305
    },
    {
      "id": "SVN",
      "value": 470259
    },
    {
      "id": "SWZ",
      "value": 728583
    },
    {
      "id": "SYR",
      "value": 711131
    },
    {
      "id": "TCD",
      "value": 246074
    },
    {
      "id": "TGO",
      "value": 421368
    },
    {
      "id": "THA",
      "value": 192633
    },
    {
      "id": "TJK",
      "value": 435611
    },
    {
      "id": "TKM",
      "value": 77717
    },
    {
      "id": "TLS",
      "value": 504133
    },
    {
      "id": "TTO",
      "value": 182822
    },
    {
      "id": "TUN",
      "value": 683822
    },
    {
      "id": "TUR",
      "value": 333142
    },
    {
      "id": "TWN",
      "value": 163882
    },
    {
      "id": "TZA",
      "value": 592697
    },
    {
      "id": "UGA",
      "value": 473734
    },
    {
      "id": "UKR",
      "value": 355159
    },
    {
      "id": "URY",
      "value": 202590
    },
    {
      "id": "USA",
      "value": 243919
    },
    {
      "id": "UZB",
      "value": 187919
    },
    {
      "id": "VEN",
      "value": 174804
    },
    {
      "id": "VNM",
      "value": 986224
    },
    {
      "id": "VUT",
      "value": 548273
    },
    {
      "id": "PSE",
      "value": 893287
    },
    {
      "id": "YEM",
      "value": 677228
    },
    {
      "id": "ZAF",
      "value": 374412
    },
    {
      "id": "ZMB",
      "value": 407887
    },
    {
      "id": "ZWE",
      "value": 456148
    },
    {
      "id": "KOR",
      "value": 938569
    }
  ]
  return (
    <>
    <Box sx={{height:"75vh"}}>

    <ResponsiveChoropleth
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
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
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
    </>
  )
}

export default Geography