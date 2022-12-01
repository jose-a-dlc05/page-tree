import { useState } from 'react';
export default function ListItems({ data: listItemData, key }) {
	const [collapse, setCollapse] = useState(true);
	return (
		<li key={key} onClick={() => setCollapse(!collapse)}>
			{listItemData?.name}
			<ul>
				{listItemData.children?.map((item, idx) => {
					return collapse && <ListItems key={idx} data={item} />;
				})}
			</ul>
		</li>
	);
}
