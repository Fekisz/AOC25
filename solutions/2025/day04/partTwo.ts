import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		let newSum = 0;
		let newInput1 = [];
		for (let i = 0; i < input.length; i++) {
			newInput1[i] = input[i].trim();
		}

		do {
			const old = newInput1;
			sum += newSum;
			newSum = 0;
			let newInput2 = [];
			let indexOfline = 0;

			for (const line of newInput1) {
				let newLine: string[] = [];
				for (let i = 0; i < line.length; i++) {
					let numberOfPaper = 0;
					if (line[i] === "@") {
						numberOfPaper += checkIfPaper(indexOfline - 1, i - 1);
						numberOfPaper += checkIfPaper(indexOfline - 1, i);
						numberOfPaper += checkIfPaper(indexOfline - 1, i + 1);
						numberOfPaper += checkIfPaper(indexOfline, i - 1);
						numberOfPaper += checkIfPaper(indexOfline, i + 1);
						numberOfPaper += checkIfPaper(indexOfline + 1, i - 1);
						numberOfPaper += checkIfPaper(indexOfline + 1, i);
						numberOfPaper += checkIfPaper(indexOfline + 1, i + 1);
					}
					if (numberOfPaper < 4 && line[i] === "@") {
						newSum++;
						newLine.push(".");
					} else if (line[i] === "@") {
						newLine.push("@");
					} else {
						newLine.push(".");
					}
				}
				newInput2.push(newLine);

				indexOfline++;
			}
			for (let i = 0; i < newInput2.length; i++) {
				newInput1[i] = newInput2[i];
			}

			function checkIfPaper(x: number, y: number) {
				try {
					return old[x][y] === "@" ? 1 : 0;
				} catch {
					return 0;
				}
			}
		} while (newSum !== 0);
		return sum;
	},
	{ inputMode: "lines" },
);
