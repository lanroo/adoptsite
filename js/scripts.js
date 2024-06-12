document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;
    const affiliateLink = document.getElementById('affiliate-link').value;

    document.getElementById('preview-name').textContent = productName;
    document.getElementById('preview-description').textContent = productDescription;
    document.getElementById('preview-image').src = productImage;
    document.getElementById('preview-link').href = affiliateLink;
});


function toggleOtherTextInput() {
    var selectElement = document.getElementById('edit-sexo');
    var otherTextInput = document.getElementById('other-text');
    if (selectElement.value === 'other') {
        otherTextInput.style.display = 'inline-block';
    } else {
        otherTextInput.style.display = 'none';
    }
}

// POPUP FUNCTIONS
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function saveForm() {
    document.getElementById("popup").style.display = "none";
    alert("Your form has been saved! Thank you (:");
  
    window.location.href = "../index.html";
}
