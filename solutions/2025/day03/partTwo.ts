import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		for (const line of input) {
			let numbers: number[] = [];
			let startFrom = 0;
			for (let i = 11; i >= 0; i--) {
				const newLine =
					i === 0
						? line.trim().slice(startFrom).split("").map(Number)
						: line.trim().slice(startFrom, -i).split("").map(Number);

				numbers.push(newLine.map(Number).sort((a, b) => b - a)[0]);

				startFrom += newLine.findIndex((x) => x === numbers[numbers.length - 1]) + 1;
			}

			sum += Number(numbers.join(""));
		}
		return sum;
	},
	{ inputMode: "lines" },
);
