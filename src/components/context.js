import React, { useContext, useState } from 'react';

export const RezervationContext = React.createContext();
RezervationContext.displayName = 'RezervationContext';

export const RezervationProvider = (props) => {
	let initialState = {};
	const [formData, setFormData] = useState(initialState);

	function getRezervationContent() {
		return formData;
	}

	function addFormData(postData) {
		setFormData(postData);
	}
	return (
		<RezervationContext.Provider
			value={{
				getRezervationContent,
				addFormData,
			}}
		>
			{props.children}
		</RezervationContext.Provider>
	);
};

export const useRezervationContext = () => {
	const context = useContext(RezervationContext);

	if (!context) {
		throw new Error(
			'You have to initialize the RezervationContext.Provider'
		);
	}

	return context;
};
