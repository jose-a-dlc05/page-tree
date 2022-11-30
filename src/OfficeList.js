import { useEffect, useState } from 'react';
import { fetchData } from './data.js';
import ListItems from './ListItems';

function App() {
	const [officeData, setOfficeData] = useState(null);
	useEffect(() => {
		fetchData().then((data) => setOfficeData(data));
	}, [officeData]);

	if (officeData) {
		return (
			<ul>
				{officeData.map((val, idx) => (
					<>
						<ListItems key={idx} data={val} />
					</>
				))}
			</ul>
		);
	}
}

export default App;
