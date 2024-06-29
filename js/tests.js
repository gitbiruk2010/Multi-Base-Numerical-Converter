
window.onload = function() {
    runTests();  
};

function runTests() {
    const tests = [
        //normal cases
        { number: "1010", fromBase: 2, toBase: 16, expected: "A" },      
        { number: "A1", fromBase: 16, toBase: 10, expected: "161" },     
        { number: "255", fromBase: 10, toBase: 2, expected: "11111111" }, 
        // edge cases
        { number: "0", fromBase: 10, toBase: 2, expected: "0" },          
        { number: "FFFFFFFF", fromBase: 16, toBase: 10, expected: "4294967295" },
        { number: "1", fromBase: 2, toBase: 16, expected: "1" },    
    ];

    tests.forEach(test => {
        let result; 
        let pass = false; 
        try {
            result = convert(test.number, test.fromBase, test.toBase);
            pass = result === test.expected;
        } catch (e) {
            result = `Error: ${e.message}`;
        }
        console.log(`Test with number: ${test.number}, fromBase: ${test.fromBase}, toBase: ${test.toBase}. Expected: ${test.expected}, Got: ${result}. ${pass ? "PASS" : "FAIL"}`);
    });
}
