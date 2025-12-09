import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;
		let numbers: string[][] = [];
		let symbol: string[] = [];
		for (let i = 0; i < input.length; i++) {
			if (i === input.length - 1) {
				let match = input[i].match(/(\-|\+|\*|\\)/g);

				if (match) symbol.push(...match.map(String));
			} else {
				let number: string = "";
				let k = 0;
				for (let j = 0; j <= input[i].length; j++) {
					let check = 1;

					for (let l = 0; l < input.length - 1; l++) {
						check *= input[l][j] === " " || j === input[i].length ? 1 : 0;
					}
					if (check === 1) {
						if (!numbers[k]) numbers[k] = [];
						numbers[k].push(number);
						k++;
						number = "";
					} else {
						number += input[i][j];
					}
				}
			}
		}
		let num: number[][] = [];
		for (const lineNumbers of numbers) {
			let newNumbers: number[] = [];

			let newNumberLenght =
				lineNumbers[0].length >= lineNumbers[lineNumbers.length - 1].length
					? String(lineNumbers[0]).length
					: String(lineNumbers[lineNumbers.length - 1]).length;
			for (let i = 0; i < newNumberLenght; i++) {
				let newNumber = "";
				for (const newLine of lineNumbers) {
					if (newLine[i] !== " ") {
						newNumber += newLine[i];
					}
				}
				newNumbers.push(Number(newNumber));
			}
			num.push(newNumbers);
		}

		for (let i = 0; i < symbol.length; i++) {
			let result = symbol[i] === "*" ? 1 : 0;
			if (num[i]) {
				for (const operation of num[i]) {
					switch (symbol[i]) {
						case "+":
							result += operation;
							break;
						case "*":
							result *= operation;
					}
				}
			}
			sum += result;
		}

		return sum;
	},
	{ inputMode: "lines" },
);
