export default function currencyFormat(amount: number, dp?: boolean) {
  return `${'₦'} ${amount
    .toFixed(dp ? 2 : 0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}
