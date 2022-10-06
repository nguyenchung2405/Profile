import React from 'react'
import { Spin } from 'antd';

export default function Loading() {
  return (
    <Spin indicator={<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        style={{margin: "auto",  display: "block", shapeRendering: "auto"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="0" fill="none" stroke="#e90c59" strokeWidth="4">
          <animate attributeName="r" repeatCount="indefinite" dur="0.8695652173913042s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
          <animate attributeName="opacity" repeatCount="indefinite" dur="0.8695652173913042s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
        </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#46dff0" stroke-width="4">
          <animate attributeName="r" repeatCount="indefinite" dur="0.8695652173913042s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.4347826086956521s"></animate>
          <animate attributeName="opacity" repeatCount="indefinite" dur="0.8695652173913042s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.4347826086956521s"></animate>
        </circle>
        </svg>}>
    </Spin>
  )
}
