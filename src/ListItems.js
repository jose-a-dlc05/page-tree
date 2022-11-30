export default function ListItems({ data: listItemData, key }) {
	return (
		<li key={key}>
			{listItemData?.name}
			<ul>
				{listItemData.children?.map((item, idx) => {
					return <ListItems key={idx} data={item} />;
				})}
			</ul>
		</li>
	);
}
