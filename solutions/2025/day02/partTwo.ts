import { run } from "aoc-framework";

run(
	(input) => {
		let ans = 0;
		let numbers = input.split(",");
		for (const number of numbers) {
			const idRange = number.split("-");

			for (let i = Number(idRange[0]); i <= Number(idRange[1]); i++) {
				const leng = i.toString().length;

				for (let k = 2; k <= leng; k++) {
					if (leng % k === 0) {
						const partNumbers = leng / k;
						const match = i.toString().match(new RegExp("\\d{" + partNumbers + "}", "g"));
						if (match?.every((x) => x === match[0])) {
							ans += i;
							break;
						}
					}
				}
			}
		}
		return ans;
	},
	{ inputMode: "raw" },
);
