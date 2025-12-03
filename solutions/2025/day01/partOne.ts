import { error } from "console";
import { run } from "aoc-framework";

run(
	(input) => {
		let point = 50;
		let ans = 0;

		for (const line of input) {
			const ad_value = Number(line.slice(1)) % 100;

			switch (line[0]) {
				case "L":
					point -= ad_value;
					if (point < 0) {
						point = 100 + point;
					}
					break;
				case "R":
					point += ad_value;
					if (point > 99) {
						point -= 100;
					}
					break;
			}
			if (point == 0) ans++;
			// console.log("value" + ad_value + " point:" + point);
		}

		return ans;
	},
	{ inputMode: "lines" },
);
