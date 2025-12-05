import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let indexOfline = 0;

		for (const line of input) {
			for (let i = 0; i < line.length; i++) {
				let numberOfPaper = 0;
				if (line[i] === "@") {
					const index = indexOfline;
					numberOfPaper += checkIfPaper(index - 1, i - 1);
					numberOfPaper += checkIfPaper(index - 1, i);
					numberOfPaper += checkIfPaper(index - 1, i + 1);
					numberOfPaper += checkIfPaper(index, i - 1);
					numberOfPaper += checkIfPaper(index, i + 1);
					numberOfPaper += checkIfPaper(index + 1, i - 1);
					numberOfPaper += checkIfPaper(index + 1, i);
					numberOfPaper += checkIfPaper(index + 1, i + 1);
				}
				if (numberOfPaper < 4 && line[i] === "@") {
					sum++;
				}
			}

			indexOfline++;
		}
		function checkIfPaper(x: number, y: number): number {
			try {
				if (input[x][y] === "@") return 1;
				else return 0;
			} catch {
				return 0;
			}
		}
		return sum;
	},
	{ inputMode: "lines" },
);
