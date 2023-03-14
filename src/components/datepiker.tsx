import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date(startDate));
	return (
		// <DatePicker
		// 	onChange={(date) => date && setStartDate(date)}
		// 	className='form-control'
		// />
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
							onChange={(date) => date && setStartDate(date)}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							dateFormat='dd/MM/yyyy'
							className='form-control'
						/>
					</div>
				</div>
				<div className='time pull-right'>
					<div className='styled-select-time'>
						<select name='pick-up-time' id='pick-up-time'>
							<option value='12:00 AM'>12:00 AM</option>
							<option value='12:30 AM'>12:30 AM</option>
							<option value='01:00 AM'>01:00 AM</option>
							<option value='01:30 AM'>01:30 AM</option>
							<option value='02:00 AM'>02:00 AM</option>
							<option value='02:30 AM'>02:30 AM</option>
							<option value='03:00 AM'>03:00 AM</option>
							<option value='03:30 AM'>03:30 AM</option>
							<option value='04:00 AM'>04:00 AM</option>
							<option value='04:30 AM'>04:30 AM</option>
							<option value='05:00 AM'>05:00 AM</option>
							<option value='05:30 AM'>05:30 AM</option>
							<option value='06:00 AM'>06:00 AM</option>
							<option value='06:30 AM'>06:30 AM</option>
							<option value='07:00 AM'>07:00 AM</option>
							<option value='07:30 AM'>07:30 AM</option>
							<option value='08:00 AM'>08:00 AM</option>
							<option value='08:30 AM'>08:30 AM</option>
							<option value='09:00 AM'>09:00 AM</option>
							<option value='09:30 AM'>09:30 AM</option>
							<option value='10:00 AM'>10:00 AM</option>
							<option value='10:30 AM'>10:30 AM</option>
							<option value='11:00 AM'>11:00 AM</option>
							<option value='11:30 AM'>11:30 AM</option>
							<option value='12:00 PM'>12:00 PM</option>
							<option value='12:30 PM'>12:30 PM</option>
							<option value='01:00 PM'>01:00 PM</option>
							<option value='01:30 PM'>01:30 PM</option>
							<option value='02:00 PM'>02:00 PM</option>
							<option value='02:30 PM'>02:30 PM</option>
							<option value='03:00 PM'>03:00 PM</option>
							<option value='03:30 PM'>03:30 PM</option>
							<option value='04:00 PM'>04:00 PM</option>
							<option value='04:30 PM'>04:30 PM</option>
							<option value='05:00 PM'>05:00 PM</option>
							<option value='05:30 PM'>05:30 PM</option>
							<option value='06:00 PM'>06:00 PM</option>
							<option value='06:30 PM'>06:30 PM</option>
							<option value='07:00 PM'>07:00 PM</option>
							<option value='07:30 PM'>07:30 PM</option>
							<option value='08:00 PM'>08:00 PM</option>
							<option value='08:30 PM'>08:30 PM</option>
							<option value='09:00 PM'>09:00 PM</option>
							<option value='09:30 PM'>09:30 PM</option>
							<option value='10:00 PM'>10:00 PM</option>
							<option value='10:30 PM'>10:30 PM</option>
							<option value='11:00 PM'>11:00 PM</option>
							<option value='11:30 PM'>11:30 PM</option>
						</select>
					</div>
				</div>
				<div className='clearfix'></div>
			</div>
			{/* <!-- Pick-up date/time end --> */}

			{/* <!-- Drop-off date/time start --> */}
			<div className='datetime drop-off'>
				<div className='date pull-left'>
					<div className='input-group'>
						<span className='input-group-addon pixelfix'>
							<span className='glyphicon glyphicon-calendar'></span>
							Drop-off
						</span>
						<DatePicker
							selected={endDate}
							onChange={(date) => date && setEndDate(date)}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							dateFormat='dd/MM/yyyy'
							className='form-control'
						/>
					</div>
				</div>
				<div className='time pull-right'>
					<div className='styled-select-time'>
						<select name='drop-off-time' id='drop-off-time'>
							<option value='12:00 AM'>12:00 AM</option>
							<option value='12:30 AM'>12:30 AM</option>
							<option value='01:00 AM'>01:00 AM</option>
							<option value='01:30 AM'>01:30 AM</option>
							<option value='02:00 AM'>02:00 AM</option>
							<option value='02:30 AM'>02:30 AM</option>
							<option value='03:00 AM'>03:00 AM</option>
							<option value='03:30 AM'>03:30 AM</option>
							<option value='04:00 AM'>04:00 AM</option>
							<option value='04:30 AM'>04:30 AM</option>
							<option value='05:00 AM'>05:00 AM</option>
							<option value='05:30 AM'>05:30 AM</option>
							<option value='06:00 AM'>06:00 AM</option>
							<option value='06:30 AM'>06:30 AM</option>
							<option value='07:00 AM'>07:00 AM</option>
							<option value='07:30 AM'>07:30 AM</option>
							<option value='08:00 AM'>08:00 AM</option>
							<option value='08:30 AM'>08:30 AM</option>
							<option value='09:00 AM'>09:00 AM</option>
							<option value='09:30 AM'>09:30 AM</option>
							<option value='10:00 AM'>10:00 AM</option>
							<option value='10:30 AM'>10:30 AM</option>
							<option value='11:00 AM'>11:00 AM</option>
							<option value='11:30 AM'>11:30 AM</option>
							<option value='12:00 PM'>12:00 PM</option>
							<option value='12:30 PM'>12:30 PM</option>
							<option value='01:00 PM'>01:00 PM</option>
							<option value='01:30 PM'>01:30 PM</option>
							<option value='02:00 PM'>02:00 PM</option>
							<option value='02:30 PM'>02:30 PM</option>
							<option value='03:00 PM'>03:00 PM</option>
							<option value='03:30 PM'>03:30 PM</option>
							<option value='04:00 PM'>04:00 PM</option>
							<option value='04:30 PM'>04:30 PM</option>
							<option value='05:00 PM'>05:00 PM</option>
							<option value='05:30 PM'>05:30 PM</option>
							<option value='06:00 PM'>06:00 PM</option>
							<option value='06:30 PM'>06:30 PM</option>
							<option value='07:00 PM'>07:00 PM</option>
							<option value='07:30 PM'>07:30 PM</option>
							<option value='08:00 PM'>08:00 PM</option>
							<option value='08:30 PM'>08:30 PM</option>
							<option value='09:00 PM'>09:00 PM</option>
							<option value='09:30 PM'>09:30 PM</option>
							<option value='10:00 PM'>10:00 PM</option>
							<option value='10:30 PM'>10:30 PM</option>
							<option value='11:00 PM'>11:00 PM</option>
							<option value='11:30 PM'>11:30 PM</option>
						</select>
					</div>
				</div>
				<div className='clearfix'></div>
			</div>
			{/* <!-- Drop-off date/time end --> */}
		</>
	);
};

export default DatePickerComponent;
