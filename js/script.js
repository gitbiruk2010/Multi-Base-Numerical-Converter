
function convertBase() {
    let number = document.getElementById("number").value;
    let fromBase = parseInt(document.getElementById("fromBase").value);
    let toBase = parseInt(document.getElementById("toBase").value);

    try {
       
        let convertedNumber = convert(number, fromBase, toBase);
        document.getElementById("result").textContent = `Result: ${convertedNumber}`;
    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`;
    }
}

function convert(number, fromBase, toBase) {

    if (fromBase < 2 || fromBase > 16 || toBase < 2 || toBase > 16) {
        throw new Error("Base should be between 2 and 16");
    }

    let base10Number = parseInt(number, fromBase);
    if (isNaN(base10Number)) {
        throw new Error("Invalid number for the specified base");
    }
    return base10Number.toString(toBase).toUpperCase();
}
