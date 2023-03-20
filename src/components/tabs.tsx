import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RentalLocations from './RentalLocation';
import TourLocations from './TourLocations';

const HomeTabs = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>
					<h4>Rental</h4>
				</Tab>
				<Tab>
					<h4>Tours</h4>
				</Tab>
			</TabList>

			<TabPanel>
				<div className='subtitle'>Please select pickup date</div>

				<RentalLocations />
			</TabPanel>
			<TabPanel>
				<div className='subtitle'>
					Please select pickup and drop off date in the form below
				</div>
				<TourLocations />

				<input
					type='submit'
					className='submit'
					name='submit'
					value='continue tour reservation'
					id='checkoutModalLabel'
				/>
			</TabPanel>
		</Tabs>
	);
};

export default HomeTabs;
