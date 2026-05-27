"use client"

import { Bar, Line, ComposedChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

//Data for this bar and line chart
const chartData = [
	{ month: "Jan 25", invoiced: 81, despatched: 81, percentage: 100},
	{ month: "Feb 25", invoiced: 185, despatched: 185, percentage: 100},
	{ month: "Mar 25", invoiced: 192, despatched: 192, percentage: 100},
	{ month: "Apr 25", invoiced: 231, despatched: 231, percentage: 100},
	{ month: "May 25", invoiced: 261, despatched: 261, percentage: 100},
	{ month: "Jun 25", invoiced: 216, despatched: 216, percentage: 100},
	{ month: "Jul 25", invoiced: 263, despatched: 263, percentage: 100},
	{ month: "Aug 25", invoiced: 196, despatched: 196, percentage: 100},
	{ month: "Sep 25", invoiced: 224, despatched: 224, percentage: 100},
	{ month: "Oct 25", invoiced: 254, despatched: 254, percentage: 100},
	{ month: "Nov 25", invoiced: 175, despatched: 175, percentage: 100},
	{ month: "Dec 25", invoiced: 156, despatched: 156, percentage: 99},
	{ month: "Jan 26", invoiced: 121, despatched: 121, percentage: 100},
	{ month: "Feb 26", invoiced: 207, despatched: 207, percentage: 100},
	{ month: "Mar 26", invoiced: 240, despatched: 240, percentage: 98},
	{ month: "Apr 26", invoiced: 203, despatched: 203, percentage: 90},
	{ month: "May 26", invoiced: 95, despatched: 95, percentage: 62},
]

const toPercentage = (value) => `${value}%`;


const chartConfig = {
	invoiced: {
		label: "Invoiced",
		color: "#A08c64"
	},
	despatched: {
		label: "Despatched",
		color: "#73644b"
	},
	percentage: {
		label: "Coverage",
		color: "#1441f5"
	}
} satisfies ChartConfig

export function CoverageChart() {
	return (
		<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
			<ComposedChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={false}
					axisLine={false}
					// tickFormatter={(value)=> value.slice (0, 3)}
				/>
				{/* Primary Y-Axis on the left */}
		        <YAxis yAxisId="leftAxis"  />
		        
		        {/* Secondary Y-Axis on the right */}
		        <YAxis 
					yAxisId="rightAxis"
					dataKey="percenage"
					orientation="right" 
					stroke="#82ca9d" 
					tickFormatter={(value) => `${value}%`}
					domain={[0, 100]} 
					label={{ value: 'POD/POC Coverage', angle: 90, position: 'insideRight' }}
				/>
				<ChartTooltip content ={<ChartTooltipContent/>} />
				<ChartLegend content={<ChartLegendContent/>} fontSize={24} />
				<Bar dataKey="invoiced" fill="var(--color-invoiced)" radius={4}/>
				<Bar dataKey="despatched" fill="var(--color-despatched)" radius={4}/>
				<Line dataKey="percentage" strokeWidth ={3} fill="var(--color-percentage)" radius={4}/>
			</ComposedChart>
		</ChartContainer>
		)
}