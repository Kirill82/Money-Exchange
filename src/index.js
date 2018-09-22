// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    var H = 50, Q = 25, D = 10, N = 5, P = 1;
    var resExchange = {};
    if (currency < 0) {
        return resExchange
    }
    if ((currency / H )^0 > 0) {
        resExchange['H'] = (currency / H )^0;
        currency = currency - resExchange['H'] * H;
    }
    if ((currency / Q )^0 > 0) {
        resExchange['Q'] = (currency / Q )^0;
        currency = currency - resExchange['Q'] * Q;
    }
    if ((currency / D )^0 > 0) {
        resExchange['D'] = (currency / D )^0;
        currency = currency - resExchange['D'] * D;
    }
    if ((currency / N )^0 > 0) {
        resExchange['N'] = (currency / N )^0;
        currency = currency - resExchange['N'] * N;
    }
    if ((currency / P )^0 > 0) {
        resExchange['P'] = (currency / P )^0;
        currency = currency - resExchange['P'] * P;
    }

    return resExchange;
}
