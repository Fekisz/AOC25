import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		for (const line of input) {
			const firstNumber = line
				.slice(0, line.length - 1)
				.split("")
				.map(Number)
				.sort((a, b) => b - a)[0];
			const array = line.split("").map(Number);
			const secondNumber = line
				.slice(array.findIndex((x) => x === firstNumber) + 1)
				.split("")
				.map(Number)
				.sort((a, b) => b - a)[0];

			sum += Number(firstNumber.toString() + secondNumber.toString());
		}
		return sum;
	},
	{ inputMode: "lines" },
);
