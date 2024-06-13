document.addEventListener("DOMContentLoaded", function() {
    function toggleOtherTextInput() {
        var selectElement = document.getElementById('edit-sexo');
        var otherTextInput = document.getElementById('other-text');
        if (selectElement.value === 'other') {
            otherTextInput.style.display = 'inline-block';
        } else {
            otherTextInput.style.display = 'none';
        }
    }

    function showPopup() {
        Swal.fire({
            title: "Atention!",
            text: "Are you sure you want to save the page?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Não",
            confirmButtonText: "Sim"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Página Salva com Sucesso!",
                    text: "A página foi salva com todas as novas alterações!",
                    icon: "success"
                }).then(() => {               
                    window.location.href = "../index.html";
                });
            }
        });
    }

    function validateForm() {
        const name = document.querySelector('input[name="name"]').value;
        const tel = document.querySelector('input[name="tel"]').value;
        const city = document.querySelector('input[name="city"]').value;
        const id = document.querySelector('input[name="id"]').value;

        if (!name || !tel || !city || !id) {
            Swal.fire({
                title: "Erro!",
                text: "All fields must be filled in",
                icon: "error",
                confirmButtonText: "OK"
            });
            return false;
        }

        return true;
    }

    // Validation Tell 
    function applyPhoneMask(event) {
        var input = event.target;
        var value = input.value.replace(/\D/g, '');
        var formattedValue = '';

        if (value.length > 0) {
            formattedValue += '(' + value.substring(0, 2);
        }
        if (value.length > 2) {
            formattedValue += ') ' + value.substring(2, 7);
        }
        if (value.length > 7) {
            formattedValue += '-' + value.substring(7, 11);
        }

        input.value = formattedValue;
    }

    document.getElementById('edit-sexo').addEventListener('change', toggleOtherTextInput);
    document.getElementById('saveButton').addEventListener('click', function() {
        if (validateForm()) {
            showPopup();
        }
    });

    // Name validation
    document.querySelector('input[name="name"]').addEventListener('input', function() {
        if (this.value.length < 3) {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = 'green';
        }
    });

    // Tell mask
    document.querySelector('input[name="tel"]').addEventListener('input', applyPhoneMask);
});



c
