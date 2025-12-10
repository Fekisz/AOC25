import { run } from "aoc-framework";

interface beam {
	position: number;
	streng: number;
}
run(
	(input) => {
		let points: beam[] = [
			{
				position: input[0].indexOf("S"),
				streng: 1,
			},
		];

		for (const line of input) {
			const s: beam[] = [];
			for (const point of points) {
				if (line[point.position] === "^") {
					const existsLeft = s.find((b) => b.position === point.position - 1);
					if (existsLeft === undefined) {
						s.push({ position: point.position - 1, streng: point.streng });
					} else {
						s[s.indexOf(existsLeft)] = { position: point.position - 1, streng: point.streng + existsLeft.streng };
					}

					const existsRight = s.find((b) => b.position === point.position + 1);
					if (existsRight === undefined) {
						s.push({ position: point.position + 1, streng: point.streng });
					} else {
						s[s.indexOf(existsRight)] = { position: point.position + 1, streng: point.streng + existsRight.streng };
					}
				} else {
					const exists = s.find((b) => b.position === point.position);
					if (exists === undefined) {
						s.push({ position: point.position, streng: point.streng });
					} else {
						s[s.indexOf(exists)] = { position: point.position, streng: point.streng + exists.streng };
					}
				}
			}
			points = s;
		}
		let sum = points.reduce((a, b) => a + b.streng, 0);
		return sum;
	},
	{ inputMode: "lines" },
);
