export default function currencyFilter(value) {
  return Number.isInteger(value) ? value.toLocaleString() : value;
}
