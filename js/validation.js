export function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const tel = document.querySelector('input[name="tel"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const id = document.querySelector('input[name="id"]').value;

    if (!name || !tel || !city || !id) {
        Swal.fire({
            title: "Erro!",
            text: "All fields must be completed",
            icon: "error",
            confirmButtonText: "OK"
        });
        return false;
    }

    return true;
}

document.querySelector('input[name="name"]').addEventListener('input', function() {
    if (this.value.length < 3) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});

