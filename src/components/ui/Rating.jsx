import React from "react";

const Rating = ({ rate }) => {
	if (rate < 0 || rate > 5) return;

	return (
		<div>
			{Array.from({ length: rate }, () => (
				<span>⭐</span>
			))}
		</div>
	);
};

export default Rating;
