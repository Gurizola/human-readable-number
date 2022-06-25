module.exports = function toReadable (number) {
    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const second = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const third = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number < 10){
        return first[number];
    }else if(number > 10 && number < 20){
        return second[number - 11];
    }else if(number > 9 && number < 100 && number % 10 === 0){
        return third[(number / 10) - 1];
    }else if(number > 9 && number < 100){
        return `${third[Math.floor(number / 10) - 1]} ${first[number % 10]}`;
    }else if(number > 99){
        if(number % 100 === 0){
            return `${first[number / 100]} hundred`;
        }else if(number % 10 === 0){
            return `${first[Math.floor(number / 100)]} hundred ${third[((number - Math.floor(number / 100) * 100) / 10) - 1]}`
        }else if((Math.floor((number % 100) / 10) > 1)){
            return `${first[Math.floor(number / 100)]} hundred ${third[(Math.floor((number % 100) / 10)) - 1]} ${first[number % 10]}`
        }else if(number % 100 > 10){
            return `${first[Math.floor(number / 100)]} hundred ${second[(number % 100) - 11]}`
        }else{
            return `${first[Math.floor(number / 100)]} hundred ${first[(number % 100)]}`
        }
    }
}
