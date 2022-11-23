const PortfolioCurrency = {
    setCurrency: function (value, symbol) {
        localStorage.setItem("currency", value)
    },
    getCurrency: function(){
        var currency = localStorage.getItem("currency")
        if (currency === null){
            return 'USD'
        } else {
            return currency
        }
    }

}

export default PortfolioCurrency