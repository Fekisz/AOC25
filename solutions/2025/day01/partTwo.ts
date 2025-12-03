import { run } from "aoc-framework";

run(
	(input) => {
		let point = 50;
		let ans = 0;

		for (const line of input) {
			ans += Math.floor(Number(line.slice(1)) / 100);
			const ad_value = Number(line.slice(1)) % 100;

			switch (line[0]) {
				case "L":
					if (point == 0) ans--;
					point -= ad_value;

					if (point < 0) {
						point = 100 + point;
						ans++;
					}
					if (point == 0) ans++;
					break;
				case "R":
					point += ad_value;
					if (point > 99) {
						point -= 100;
						ans++;
					}
					break;
			}

			console.log("value" + ad_value + " point:" + point + "clicks " + ans);
		}

		return ans;
	},
	{ inputMode: "lines" },
);
