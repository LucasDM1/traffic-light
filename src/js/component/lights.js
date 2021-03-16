import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");

	const ColorChange = NewColor => {
		setColor(NewColor);
	};

	return (
		<div className="container">
			<div
				className={color == "red" ? "light red clicked" : "light red"}
				onClick={() => ColorChange("red")}></div>
			<div
				className={
					color == "yellow" ? "light yellow clicked" : "light yellow"
				}
				onClick={() => ColorChange("yellow")}></div>
			<div
				className={
					color == "green" ? "light green clicked" : "light green"
				}
				onClick={() => ColorChange("green")}></div>
		</div>
	);
}
