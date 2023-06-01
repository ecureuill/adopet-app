export const bufferToURL = (data: Buffer) => {
	return URL.createObjectURL(new Blob([new Uint8Array(data)]));
};