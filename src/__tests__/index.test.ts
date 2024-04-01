import * as assert from "node:assert/strict";
import { describe, it } from "node:test";

import { germanZipcode } from "../index.js";

await describe("germanZipcode", async () => {
	await it("returns info for valid code", () => {
		const result = germanZipcode("10115");

		if (!result) {
			throw new Error("returned null");
		}

		assert.equal(result.code, "10115");
		assert.equal(result.name, "Berlin Mitte");
		assert.equal(result.state, "Berlin");
	});

	await it("returns null for invalid code", () => {
		assert.equal(germanZipcode("0000001"), null);
	});
});
