import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let numbers: number[][] = [];
		let symbol: string[] = [];
		for (const line of input) {
			let match = line.match(/(\d+)/g);

			if (match)
				for (let i = 0; i < match.length; i++) {
					if (!numbers[i]) numbers[i] = [];
					numbers[i].push(Number(match[i]));
				}
			if (line.match(/\D/g)) match = line.match(/(\-|\+|\*|\\)/g);
			if (match?.length !== 0 && match) symbol.push(...match.map(String));
		}

		function count(x: number): number {
			let result = symbol[x] === "*" ? 1 : 0;
			for (const operation of numbers[x]) {
				switch (symbol[x]) {
					case "+":
						result += operation;
						break;
					case "*":
						result *= operation;
				}
			}
			return result;
		}
		for (let i = 0; i < symbol.length; i++) {
			sum += count(i);
		}

		return sum;
	},
	{ inputMode: "lines" },
);
