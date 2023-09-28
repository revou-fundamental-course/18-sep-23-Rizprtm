function validateForm() {
    const yourName = document.getElementById("yourname").value;
    const email = document.getElementById("email").value;
    const selectOption = document.getElementById("selectoption").value;

    if (!yourName || !email || selectOption === "") {
        console.error("Harap isi semua field dengan benar.");
        return;
    }

    console.log("Formulir berhasil divalidasi.");
    document.getElementById("login-form").submit();