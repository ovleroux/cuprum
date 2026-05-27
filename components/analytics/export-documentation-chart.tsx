"use client"

import { Bar, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LabelList } from "recharts"
import {
  Card,
  CardHeader,
  
} from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

//Data for this bar and line chart
const chartData = [
    { month: "Jan 25", invoiced: 19, despatched: 19, received: 19, percentage: 100},
    { month: "Feb 25", invoiced: 56, despatched: 56, received: 56, percentage: 100},
    { month: "Mar 25", invoiced: 57, despatched: 57, received: 56, percentage: 98},
    { month: "Apr 25", invoiced: 75, despatched: 75, received: 75, percentage: 100},
    { month: "May 25", invoiced: 60, despatched: 60, received: 60, percentage: 100},
    { month: "Jun 25", invoiced: 51, despatched: 51, received: 51, percentage: 100},
    { month: "Jul 25", invoiced: 48, despatched: 48, received: 47, percentage: 98},
    { month: "Aug 25", invoiced: 66, despatched: 66, received: 65, percentage: 98},
    { month: "Sep 25", invoiced: 64, despatched: 64, received: 61, percentage: 95},
    { month: "Oct 25", invoiced: 84, despatched: 84, received: 81, percentage: 96},
    { month: "Nov 25", invoiced: 57, despatched: 57, received: 45, percentage: 79},
    { month: "Dec 25", invoiced: 59, despatched: 59, received: 54, percentage: 92},
    { month: "Jan 26", invoiced: 32, despatched: 32, received: 31, percentage: 97},
    { month: "Feb 26", invoiced: 66, despatched: 66, received: 51, percentage: 77},
    { month: "Mar 26", invoiced: 83, despatched: 82, received: 51, percentage: 62},
    { month: "Apr 26", invoiced: 83, despatched: 71, received: 40, percentage: 56},
    { month: "May 26", invoiced: 40, despatched: 9, received: 2, percentage: 22},
]

const chartConfig = {
    despatched: {
        label: "Despatched",
        color: "#A08c64"
    },
    received: {
        label: "Export Docs Received",
        color: "#73644b"
    },
    percentage: {
        label: "Percentage",
        color: "#1441f5"
    }
} satisfies ChartConfig

export function ExportDocumentationChart() {
    return (
        <Card>
            <CardHeader>
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-900">EXPORT DOCUMENTATION</h1>
            </CardHeader>
            <ChartContainer config={chartConfig} className="h-[500px] w-full">
                <ComposedChart accessibilityLayer data={chartData} margin={{ top: 20, right: 60, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        
                    />
                    {/* Left Y-Axis for the bars (counts) */}
                    <YAxis 
                        yAxisId="left"
                        orientation="left"
                        domain={[0,100]}
                        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}  
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: "#e5e7eb" }}
                    />
                    {/* Right Y-Axis for the line (percentage) */}
                    <YAxis 
                        yAxisId="right"
                        orientation="right" 
                        domain={[0, 120]} 
                        ticks={[0, 20, 40, 60, 80, 100, 120]}
                        tickFormatter={(value) => `${value}%`}
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: "#e5e7eb" }}

                    />
                    <Tooltip 
                        content={({active, payload, label}) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className ="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
                                        <p className="font-medium text-gray-900 mb-2">{label}</p>
                                        {payload.map((entry, index) => (
                                            <p key={index} style={{ color: entry.color }} className="text-sm">
                                                {entry.name}: {entry.name === "Percentage" ? `${entry.value}%` : entry.value}
                                            </p>
                                        ))}	
                                    </div>
                                )
                            }
                            return null
                        }} 
                    />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="square"
                        formatter={(value) => (
                            <span className="text-sm text-gray-700">{value}</span>
                        )}
                    />

                    <Bar 
                        yAxisId="left"
                        dataKey="despatched"
                        name="Number Despatched" 
                        fill="#A08c64" 
                        barSize={20}
                        radius={[0, 0, 0, 0]}
                    />
                    <Bar 
                        yAxisId="left"
                        dataKey="received" 
                        name="Number Received" 
                        fill="#73644b"
                        barSize={20} 
                        radius={[0, 0, 0, 0]}
                    />
                    <Line 
                        yAxisId="right"
                        type="linear"
                        dataKey="percentage" 
                        name="Percentage"
                        strokeWidth ={2.5}
                        dot={false}
                        fill="#1441f5" 
                        activeDot={{ r: 5 }}
                    >
                        <LabelList 
                            dataKey="percentage" 
                            position="top" 
                            formatter={(value) => `${value}%`} 
                            fontSize={12} 
                            fill="#1441f5"
                        />
                    </Line>
                </ComposedChart>
            </ChartContainer>
        </Card>
        )
}