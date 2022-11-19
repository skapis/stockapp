const dataWrangling = {
    totalVal: function(data, key){
        if (data != null){
            var value = Object.values(data).reduce((sum, item) => sum + Number(item[key]), 0)
            return value.toFixed(2)
        } else {
            return 0
        }
    },
    gainLoss: function(a,b){
        var result = a - b
        var prc = (a-b)/b * 100
        return [result.toFixed(2), prc.toFixed(2)]
    },
    topBy: function(arr, key, number){
        if (arr != null){
            var sorted = arr.sort((a,b) => b[key] - a[key])
            var topTen = sorted.slice(1,number)
            return topTen
        }
    },
    dividendYield: function(divSum,value){
        var result = divSum/value*100
        return result.toFixed(2)
    }
}

export default dataWrangling;