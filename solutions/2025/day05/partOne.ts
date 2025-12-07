import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		const range: string[] = [];
		let ids: number[] = [];
		const fresh: number[] = [];

		for (const line of input) {
			if (line.match(/\d-\d/)) range.push(line);
			else if (line.match(/\d/)) ids.push(Number(line));
		}
		for (const rangeLine of range) {
			const [startRange, endRange] = rangeLine.split("-").map(Number);

			for (const id of ids) {
				if (id >= startRange && id <= endRange) {
					fresh.push(id);
					ids = ids.filter((x) => x !== id);
				}
			}
		}
		sum += fresh.length;
		return sum;
	},
	{ inputMode: "lines" },
);
