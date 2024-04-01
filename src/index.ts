import data from "./data.json" assert { type: "json" };

export interface ZipInfo {
	code: string;
	name: string;
	state: string;
}

export function germanZipcode(code: string): ZipInfo | null {
	return data.find((d) => d.code === code) || null;
}
