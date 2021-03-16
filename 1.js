function deepClone(obj) {
    if(typeof obj === "object"){
        var result = Object.prototype.toString.call(obj) === 'Array'? [] : {}
        for (let i in obj){
            result[i] = typeof obj === 'object'? deepClone(obj[i]) : obj[i]
        }

    }else{
        var result = obj
    }
    return result
}
