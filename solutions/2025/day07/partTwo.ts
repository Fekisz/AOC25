import { run } from "aoc-framework";

interface beam {
	position: number;
	strength: number;
}
run(
	(input) => {
		let points: beam[] = [
			{
				position: input[0].indexOf("S"),
				strength: 1,
			},
		];

		for (const line of input) {
			const s: beam[] = [];
			for (const point of points) {
				if (line[point.position] === "^") {
					const existsLeft = s.find((b) => b.position === point.position - 1);
					if (existsLeft === undefined) {
						s.push({ position: point.position - 1, strength: point.strength });
					} else {
						s[s.indexOf(existsLeft)] = { position: point.position - 1, strength: point.strength + existsLeft.strength };
					}

					const existsRight = s.find((b) => b.position === point.position + 1);
					if (existsRight === undefined) {
						s.push({ position: point.position + 1, strength: point.strength });
					} else {
						s[s.indexOf(existsRight)] = {
							position: point.position + 1,
							strength: point.strength + existsRight.strength,
						};
					}
				} else {
					const exists = s.find((b) => b.position === point.position);
					if (exists === undefined) {
						s.push({ position: point.position, strength: point.strength });
					} else {
						s[s.indexOf(exists)] = { position: point.position, strength: point.strength + exists.strength };
					}
				}
			}
			points = s;
		}
		let sum = points.reduce((a, b) => a + b.strength, 0);
		return sum;
	},
	{ inputMode: "lines" },
);
