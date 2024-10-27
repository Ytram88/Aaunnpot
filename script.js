document.getElementById("gettingStarted").addEventListener("click", function() {
    document.getElementById("welcoming").remove()
    document.getElementById("gettingStarted").remove()
    resizeContainer();
});

function resizeContainer() {
    document.querySelector('.custom-container').style.height = 'auto';;
}

const calculate = () => {
    const nameInput = document.getElementById("name");
    const startingBidInput = document.getElementById("startingBid");
    const ageRadios = document.getElementsByName("age");
    const educationSelect = document.getElementById("educationLevel");
    const netWorthSelect = document.getElementById("netWorth");
    const skillsCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const casteSelect = document.getElementById("caste");

    let valid = true;

    let startingBid = parseFloat(startingBidInput.value);
    if (isNaN(startingBid) || startingBid <= 0) {
        alert("choose a starting bid more than 0");
        return;
    }

    let name = nameInput.value.trim();
    if (!name) {
        alert("enter a name");
        return;
    }

    let totalPrice = startingBid;
    let bonus = 0;

    for (radio of ageRadios) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
            break;
        }
    }

    totalPrice *= parseFloat(educationSelect.value)

    totalPrice *= parseFloat(netWorthSelect.value);

    bonus += parseFloat(casteSelect.value);


    skillsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            if (parseFloat(checkbox.value) < 2 && (parseFloat(checkbox.value) > 0)) {
                totalPrice *= parseFloat(checkbox.value)
            } else {
                bonus += parseFloat(checkbox.value);
            }
        }
    });

    totalPrice += bonus;
    document.getElementById("result").innerText = "Total Bride Price: $" + totalPrice.toFixed(2);

    let bride = {
        bride_name: nameInput.value.trim(),
        bride_price: totalPrice.toFixed(2),
        letter_to_bride: loveLetterInput
    };
};

document.getElementById("calculateBtn").addEventListener("click", calculate);