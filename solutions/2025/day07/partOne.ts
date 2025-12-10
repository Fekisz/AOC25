import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let points = [input[0].indexOf("S")];

		for (const line of input) {
			const s: Set<number> = new Set();
			for (const point of points) {
				if (line[point] === "^") {
					s.add(point - 1);
					s.add(point + 1);
					sum++;
				} else {
					s.add(point);
				}
			}
			points = [];
			points.push(...s);
		}
		console.log(points);
		return sum;
	},
	{ inputMode: "lines" },
);
