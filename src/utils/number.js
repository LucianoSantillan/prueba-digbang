export function withThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function isANumber(value) {
    return /^[0-9]+$/.test(value);
}