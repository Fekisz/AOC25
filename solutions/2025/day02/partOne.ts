import { run } from "aoc-framework";

run(
	(input) => {
		let ans = 0;
		let numbers = input.split(",");
		for (const number of numbers) {
			const idRange = number.split("-");

			for (let i = Number(idRange[0]); i <= Number(idRange[1]); i++) {
				for (let j = 1; j <= i.toString().length; j++) {
					const partOne = i.toString().slice(0, j);
					const partTwo = i.toString().slice(j);

					if (partOne === partTwo) {
						ans += Number(partOne + partTwo);
						console.log("found: " + partOne + partTwo);
					}
				}
			}
		}
		return ans;
	},
	{ inputMode: "raw" },
);
