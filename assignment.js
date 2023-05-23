const assignment = {
    multiply: function multiplication (a, b){
        return a * b
        },
    concat: function concatOdds (arrA, arrB) {
        const newArray = [...arrA, ...arrB];
        const removeDuplicates = newArray.filter((item, index) => newArray.indexOf(item) === index);
        const odd = removeDuplicates.filter((num) => num % 2 === 1 || num % 2 === -1);
        const sortedArray = odd.sort((a, b) => a - b);
        return sortedArray
        },
    shopping: function checkout (status) {
        if (status === "guest") {
            alert("Continue as guest or create an account.")
            alert("Have an account? Login to save your shopping history.")
        } else {
            alert("Thank you for shopping!")
        }
    }
    
}
console.log(assignment.concat([1, 2, -3, 11], [15, 1, 2, 1, 3]))
module.exports = assignment