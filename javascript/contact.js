function formFunction(event) {
    event.preventDefault()
    let emri = document.getElementById("emri").value;
    let mbiemri = document.getElementById("mbiemri").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let koment = document.getElementById("exampleFormControlTextarea1").value;
    console.log(emri)
    let sms = document.getElementById("sms");

    if (emri != "" && mbiemri != "" && email != "" && koment != "") {
        sms.textContent = "Thank You " + emri + " " + mbiemri + "."
    } else {
        sms.textContent = "Fill all inputs"
    }
}


