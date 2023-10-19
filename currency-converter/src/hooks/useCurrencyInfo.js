
function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(url).then((res) => console.log(res))
}
export default useCurrencyInfo