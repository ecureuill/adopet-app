export const bufferToURL = (data: Buffer) => {
	return URL.createObjectURL(new Blob([new Uint8Array(data)]));
};

export const phoneRegex = '^\\s*(\\d{2}|\\d{0})[-. ]?(\\d{5}|\\d{4})[-. ]?(\\d{4})[-. ]?\\s*$';
