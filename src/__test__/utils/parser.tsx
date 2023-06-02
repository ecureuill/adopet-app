export const parseToKeyboard = (value: string) => {
	value = value.replaceAll('{','{{');
	value = value.replaceAll('[','[[');
	value = value.replaceAll('}','}}');
	value = value.replaceAll(']',']]');
	return value;
};