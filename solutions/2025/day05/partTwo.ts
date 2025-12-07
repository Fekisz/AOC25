import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let range: string[] = [];

		let range2: string[] = [];
		let modified: boolean = false;
		let indexOfLRange: number[] = [];
		let indexOfRRange: number[] = [];

		for (const line of input) {
			if (line.match(/\d-\d/)) range.push(line);
		}
		[indexOfLRange[0], indexOfRRange[0]] = range[0].split("-").map(Number);
		function group(x: number) {
			do {
				modified = false;
				for (const rangeLine of range) {
					const [startRange, endRange] = rangeLine.split("-").map(Number);

					if (indexOfLRange[x] > endRange || indexOfRRange[x] < startRange) {
						range2.push(rangeLine);
					} else {
						indexOfLRange[x] = startRange > indexOfLRange[x] ? indexOfLRange[x] : startRange;
						indexOfRRange[x] = endRange < indexOfRRange[x] ? indexOfRRange[x] : endRange;
						modified = true;
					}
				}

				range = range2;
				range2 = [];
			} while (modified);
		}
		for (let i = 0; range.length !== 0; i++) {
			group(i);
		}
		for (let indexLine in indexOfLRange) {
			sum += indexOfRRange[indexLine] - indexOfLRange[indexLine] + 1;
		}

		return sum;
	},
	{ inputMode: "lines" },
);
