import React, { useState, useEffect } from 'react';
import appConfig from '../appConfig.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { useRezervationContext } from './context';

interface Option {
	value: string;
	label: string;
	// Add other properties as needed
}

function Dropdowns() {
	const { addFormData } = useRezervationContext();
	const router = useRouter();
	const [firstDropdownOptions, setFirstDropdownOptions] = useState([]);
	const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
	const [selectedFirstOption, setSelectedFirstOption] = useState('');
	const [selectedSecondOption, setSelectedSecondOption] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	useEffect(() => {
		// Fetch options for the first dropdown from the REST API
		fetch(`${appConfig.baseUrl}rent`)
			.then((response) => response.json())
			.then((data) =>
				setFirstDropdownOptions(
					data.map((option: Option) => ({
						value: option,
						label: option,
					}))
				)
			)
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		// Fetch options for the second dropdown based on the selected value from the first dropdown
		if (selectedFirstOption) {
			fetch(`${appConfig.baseUrl}rent/${selectedFirstOption}`)
				.then((response) => response.json())
				.then((data) =>
					setSecondDropdownOptions(
						data.map((option: Option) => ({
							value: option,
							label: option,
						}))
					)
				)
				.catch((error) => console.error(error));
		} else {
			setSecondDropdownOptions([]);
		}
	}, [selectedFirstOption]);

	const handleFirstDropdownChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedFirstOption(event.target.value);
		setSelectedSecondOption('');
	};

	const handleSecondDropdownChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedSecondOption(event.target.value);
	};

	const toEpochTime = (dateString: string | number | Date) => {
		const date = new Date(dateString);
		return date.getTime() / 1000; // convert to seconds
	};

	const postData = () => {
		const selData = {
			selectedFirstOption,
			selectedSecondOption,
			startDate: toEpochTime(startDate),
		};
		addFormData(selData);
		router.push('/post');
	};

	return (
		<>
			<div className='datetime pick-up'>
				<div className='date pull-left'>
					<div className='input-group'>
						<span className='input-group-addon pixelfix'>
							<span className='glyphicon glyphicon-calendar'></span>
							Pick-up
						</span>
						<DatePicker
							selected={startDate}
							showTimeSelect
							onChange={(date) => date && setStartDate(date)}
							selectsStart
							startDate={startDate}
							dateFormat='dd/MM/yyyy'
							className='form-control'
							minDate={new Date()}
						/>
					</div>
				</div>
				<div className='clearfix'></div>
			</div>
			<div className='styled-select-car'>
				<select
					id='rent-from'
					value={selectedFirstOption}
					onChange={handleFirstDropdownChange}
				>
					<option value=''>From...</option>
					{firstDropdownOptions.map((option: Option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			<div className='gap'></div>
			<div className='styled-select-car'>
				<select
					id='rent-to'
					value={selectedSecondOption}
					onChange={handleSecondDropdownChange}
					disabled={!selectedFirstOption}
				>
					<option value=''>To...</option>
					{secondDropdownOptions.map((option: Option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>

			<input
				type='submit'
				className='submit'
				name='submit'
				value='continue car reservation'
				id='checkoutModalLabel'
				onClick={postData}
			/>
		</>
	);
}

export default Dropdowns;
