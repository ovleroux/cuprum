"use client"

import { Bar, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LabelList } from "recharts"
import {
  Card,
  CardHeader,
  
} from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

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
	{ month: "Dec 25", invoiced: 156, despatched: 155, percentage: 99},
	{ month: "Jan 26", invoiced: 121, despatched: 121, percentage: 100},
	{ month: "Feb 26", invoiced: 207, despatched: 207, percentage: 100},
	{ month: "Mar 26", invoiced: 240, despatched: 236, percentage: 98},
	{ month: "Apr 26", invoiced: 203, despatched: 185, percentage: 91},
	{ month: "May 26", invoiced: 148, despatched: 100, percentage: 68},
]

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
		<Card>
			<CardHeader>
				<h1 className="text-2xl font-semibold text-center mb-6 text-gray-900">POD / POC COVERAGE</h1>
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
						domain={[0,300]}
						ticks={[0, 50, 100, 150, 200, 250, 300]}  
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
												{entry.name}: {entry.name === "Coverage Percentage" ? `${entry.value}%` : entry.value}
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
						dataKey="invoiced"
						name="Number Invoiced" 
						fill="#A08c64" 
						barSize={20}
						radius={[0, 0, 0, 0]}
					/>
					<Bar 
						yAxisId="left"
						dataKey="despatched" 
						name="Number Despatched" 
						fill="#73644b"
						barSize={20} 
						radius={[0, 0, 0, 0]}
					/>
					<Line 
						yAxisId="right"
						type="linear"
						dataKey="percentage" 
						name="Coverage Percentage"
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