
function convert() {
    let val = document.getElementById('temp')
    let fa = document.getElementById('fa')
    let cel = document.getElementById('cel')

    let tempval = parseInt(val.value)
    let temp
    let result = document.getElementById('result')
    console.log(tempval)
    if (fa.checked) {
        temp = (tempval) * (9 / 5) + 32;
        result.textContent = Math.round(temp)
    }
    else if (cel.checked) {
        console.log(val)
        temp = (tempval - 32) * 5 / 9
        result.textContent = Math.round(temp)
    }
}