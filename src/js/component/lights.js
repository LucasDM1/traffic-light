import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");

	return (
		<div className="container">
			<div
				className={color == "red" ? "light red clicked" : "light red"}
				onClick={() => setColor("red")}></div>
			<div
				className={
					color == "yellow" ? "light yellow clicked" : "light yellow"
				}
				onClick={() => setColor("yellow")}></div>
			<div
				className={
					color == "green" ? "light green clicked" : "light green"
				}
				onClick={() => setColor("green")}></div>
		</div>
	);
}
