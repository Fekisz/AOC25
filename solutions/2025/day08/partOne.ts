import { run } from "aoc-framework";

interface cordinate {
	x: number;
	y: number;
	z: number;
}
interface pair {
	pairA: cordinate;
	pairB: cordinate;
	distance: number;
}
run(
	(input) => {
		const box: number[][] = [];
		let pairTable: pair[] = [];
		for (const line of input) {
			box.push(line.trim().split(",").map(Number));
		}
		function matchCordinate(pointA: cordinate, pointB: cordinate): pair {
			let distance =
				Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.z - pointB.z, 2);
			return { pairA: pointA, pairB: pointB, distance: distance };
		}
		for (let i = 0; i < box.length; i++) {
			for (let j = i + 1; j < box.length; j++) {
				pairTable.push(
					matchCordinate({ x: box[i][0], y: box[i][1], z: box[i][2] }, { x: box[j][0], y: box[j][1], z: box[j][2] }),
				);
				// console.log("i: " + i + " j: " + j + " pair: " + box[i] + box[j]);
			}
		}
		pairTable.sort((a, b) => a.distance - b.distance);
		let sorted: cordinate[][] = [[pairTable[0].pairA, pairTable[0].pairB]];
		console.log(sorted);
		for (let i = 1; i < 10; i++) {
			let exist = sorted.find((a) => {
				return (
					a.find((b) => {
						return b === pairTable[i].pairA;
					}) !== undefined
				);
			});
			console.log(exist);
			if (exist === undefined) {
				sorted.push([pairTable[i].pairA, pairTable[i].pairB]);
			} else {
				sorted[sorted.indexOf(exist)].push(pairTable[i].pairB);
			}
		}
		let sum = sorted.reduce((a, b) => a * b.length, 1);

		// console.log(pairTable);
		console.log(sorted);
		return sum;
	},
	{ inputMode: "lines" },
);
