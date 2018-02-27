module.exports = function makeExchange(currency) {
    
    var money = {
        H: 0,
        Q: 0,
        D: 0,
        N: 0,
        P: 0,
    }
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

    while( currency > 0){
        if (currency >= 50){
            currency -= 50;
            money.H++;
        } else if (currency < 50 && currency >= 25) {
            currency -= 25;
            money.Q++;
        } else if (currency < 25 && currency >= 10) {
            currency -= 10;
            money.D++;
        } else if (currency < 10 && currency >= 5) {
            currency -= 5;
            money.N++;
        } else if (currency < 5 && currency >= 1) {
            currency -= 1;
            money.P++;
        }
    };

    for (let nameMoney in money) {
        if (money[nameMoney] === 0) {
          delete money[nameMoney];
        }
    };

    return money;
    
}
