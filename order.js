let price = 0;

function calculatePrice() {
    price = 0;

    const sizeOptions = document.querySelectorAll('input[name="size"]');
    let selectedSize = '';
    
    sizeOptions.forEach(option => {
        if (option.checked) {
            selectedSize = option.value;
        }
    });

    const drinkSelect = document.getElementById('drinkSelect');
    const selectedDrink = drinkSelect.value;

    if (selectedDrink === "") {
        alert('Please select a drink.');
        sizeOptions.forEach(option => {
            option.checked = false;
        });
        document.getElementById('price').textContent = price;
        return;
    }

    if (selectedDrink === 'bubbleMilktea') {
        if (selectedSize === 'small') {
            price += 30;
        } else if (selectedSize === 'medium') {
            price += 35;
        } else if (selectedSize === 'large') {
            price += 40;
        }
    } else if (selectedDrink === 'icedLatte') {
        if (selectedSize === 'small') {
            price += 50;
        } else if (selectedSize === 'medium') {
            price += 60;
        } else if (selectedSize === 'large') {
            price += 70;
        }
    }

    document.getElementById('price').textContent = price;
}

document.querySelectorAll('input[name="size"]').forEach(option => {
    option.addEventListener('change', calculatePrice);
});

const drinkSelect = document.getElementById('drinkSelect');
drinkSelect.addEventListener('change', calculatePrice);

const placeOrderButton = document.getElementById('placeOrderButton');
placeOrderButton.addEventListener('click', (event) => {
    if (validateForm()) {
        placeOrder(event); 
    }
});

function validateForm() {
    const customerName = document.getElementById('customerName').value.trim();
    const drinkSelect = document.getElementById('drinkSelect').value;
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    const iceOptions = document.querySelectorAll('input[name="ice"]');
    const sweetnessOptions = document.querySelectorAll('input[name="sweetness"]');

    let selectedSize = '';
    let selectedIce = '';
    let selectedSweetness = '';

    sizeOptions.forEach(option => {
        if (option.checked) {
            selectedSize = option.value;
        }
    });

    iceOptions.forEach(option => {
        if (option.checked) {
            selectedIce = option.value;
        }
    });

    sweetnessOptions.forEach(option => {
        if (option.checked) {
            selectedSweetness = option.value;
        }
    });

    
    if (customerName === "") {
        alert('Please enter your name.');
        return false;
    }

    
    if (drinkSelect === "default") {
        alert('Please select a drink first.');
        return false;
    }

    if (!selectedSize) {
        alert('Please select a size.');
        return false;
    }
    if (!selectedIce) {
        alert('Please select the ice level.');
        return false;
    }
    if (!selectedSweetness) {
        alert('Please select the sweetness level.');
        return false;
    }

    return true; 
}

function placeOrder(event) {
    event.preventDefault(); 

    if (!validateForm()) {
        return; 
    }

    const customerName = document.getElementById('customerName').value.trim();
    const drinkSelect = document.getElementById('drinkSelect').value;
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    const iceOptions = document.querySelectorAll('input[name="ice"]');
    const sweetnessOptions = document.querySelectorAll('input[name="sweetness"]');

    let selectedSize = '';
    let selectedIce = '';
    let selectedSweetness = '';

    sizeOptions.forEach(option => {
        if (option.checked) {
            selectedSize = option.value;
        }
    });

    iceOptions.forEach(option => {
        if (option.checked) {
            selectedIce = option.value;
        }
    });

    sweetnessOptions.forEach(option => {
        if (option.checked) {
            selectedSweetness = option.value;
        }
    });

    const orderData = [customerName, drinkSelect, selectedSize, selectedIce, selectedSweetness];

    localStorage.setItem("orders", JSON.stringify(orderData));

    alert('Order placed successfully! Thank you for your order.');
}