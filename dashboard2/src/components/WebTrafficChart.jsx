import React, {useEffect} from 'react'
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access Form',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: 'searh engine'},
                        {value: 310, name: 'Direct'},
                        {value: 234, name: 'Email'},
                        {value: 135, name: 'Union Ads'},
                        {value: 1548, name: 'Video Ads'}
                    ],
                },
            ],
        });
    }, []);
    return (
    <div
        id = "trafficChart"
        style = {{minHeight: '400px'}}
        className = "echart"
    >
     
    </div>
  )
}

export default WebTrafficChart
