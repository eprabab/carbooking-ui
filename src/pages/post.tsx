import React, { useState, useEffect } from 'react';

interface Car {

	manufacturer: string;
	model: string;
	year: number;
}

function Post() {
	const [cars, setCars] = useState<Car[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://CarBookingALB-538637861.ap-south-1.elb.amazonaws.com/cars/getAllCars')
			.then(response => response.json())
			.then(data => setCars(data))
			.catch(error => setError(error));
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<table>
				<thead>
				<tr>
					<th>Manufacturer</th>
					<th>Model</th>
					<th>Year</th>
				</tr>
				</thead>
				<tbody>
				{cars.map(car => (
					<tr key={`${car.manufacturer}-${car.model}-${car.year}`}>
						<td>{car.manufacturer}</td>
						<td>{car.model}</td>
						<td>{car.year}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
}

export default Post;