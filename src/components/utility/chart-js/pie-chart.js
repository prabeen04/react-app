import React from 'react';
import { Pie } from 'react-chartjs-2';
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#d88af7',
			'#efbf81',
			'#8af282'
		],
		hoverBackgroundColor: [
			'#b95cdb',
			'#d19f60',
			'#72e26a'
		]
	}]
};
const PieChart = (props) => {
	return (
		<div style={{ height: '400px', width: '600px' }}>
			<Pie data={data} />
		</div>

	);
}
export default PieChart;