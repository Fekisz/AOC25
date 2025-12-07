import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let range: string[] = [];

		let range2: string[] = [];
		let modified: boolean = false;

		for (const line of input) {
			if (line.match(/\d-\d/)) range.push(line);
		}
		let [indexOfLRange, indexOfRRange] = range[0].split("-").map(Number);
		console.log(range);
		console.log(range2);
		do {
			modified = false;
			for (const rangeLine of range) {
				const [startRange, endRange] = rangeLine.split("-").map(Number);

				if (indexOfLRange > endRange || indexOfRRange < startRange) {
					console.log("nie:" + rangeLine);
					range2.push(rangeLine);
				} else {
					indexOfLRange = startRange > indexOfLRange ? indexOfLRange : startRange;
					indexOfRRange = endRange < indexOfRRange ? indexOfRRange : endRange;
					modified = true;
					console.log(rangeLine);
				}
			}
			console.log(modified);

			range = range2;
			console.log(range);
			console.log(range2);
		} while (modified);

		console.log("L: " + indexOfLRange);
		console.log("R: " + indexOfRRange);
		return sum;
	},
	{ inputMode: "lines" },
);
