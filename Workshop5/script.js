// Workshop 5 - Smart Forms
// ==== EXERCISE 1 ====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");
  const emailError = document.getElementById("emailError");
  const commentError = document.getElementById("commentError");

  // Poistaa virheilmoitukset
  function clearError(field, errorElement) {
    field.classList.remove("input-error");
    errorElement.textContent = "";
  }

  // Näyttää virheilmoituksen
  function showError(field, errorElement, message) {
    field.classList.add("input-error");
    errorElement.textContent = message;
  }

  // Tarkistetaan lomake
  function validateForm() {
    let valid = true;
    clearError(emailInput, emailError);
    clearError(commentInput, commentError);

    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    if (email.length < 6 || email.length > 15 || !email.includes("@")) {
      showError(emailInput, emailError, "Email must be 6–15 characters and contain '@'.");
      valid = false;
    }

    if (comment === "") {
      showError(commentInput, commentError, "Comment cannot be empty.");
      valid = false;
    } else if (comment.length > 50) {
      showError(commentInput, commentError, "Comment must be 50 characters or less.");
      valid = false;
    }

    return valid;
  }

  // Lomakkeen lähetys
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    if (validateForm()) {
      alert(`Email: ${emailInput.value.trim()}\nComment: ${commentInput.value.trim()}`);
    }
  });

  // Reaaliaikainen virheiden poisto
  emailInput.addEventListener("input", () => {
    if (emailError.textContent) validateForm();
  });

  commentInput.addEventListener("input", () => {
    if (commentError.textContent) validateForm();
  });

  // ==== EXERCISE 2 ====
  const calcBtn = document.getElementById("calcBtn");
  const typeSelect = document.getElementById("type");
  const yearsInput = document.getElementById("years");
  const costOutput = document.getElementById("cost");
  const discountMessage = document.getElementById("discountMessage");

  calcBtn.addEventListener("click", function () {
    let typeCost = parseFloat(typeSelect.value);
    let years = parseInt(yearsInput.value);
    let total = typeCost * years;
    let message = "";

    if (years > 2 && years < 5) {
      total *= 0.8;
      message = "🎉 You get a 20% discount!";
    } else if (years >= 5) {
      total = total * 0.8 - 5;
      message = "🔥 20% + 5€ discount for 5+ years!";
    } else {
      message = "";
    }

    costOutput.value = total.toFixed(2);
    discountMessage.textContent = message;
  });

  // ==== EXERCISE 3 ====
  const bookCalc = document.getElementById("bookCalc");
  bookCalc.addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
    const vat = parseFloat(document.getElementById("vat").value) || 0;
    let discount = parseFloat(document.getElementById("discount").value) || 0;
    const shipping = parseFloat(document.getElementById("shipping").value) || 0;

    if (quantity > 100) {
      discount *= 2;
    }

    let subtotal = quantity * price;
    let vatAmount = subtotal * (vat / 100);
    let discountAmount = subtotal * (discount / 100);
    let total = subtotal + vatAmount - discountAmount + shipping;

    document.getElementById("total").textContent = total.toFixed(2);
  });

  // ==== EXERCISE 4 ====
  const contactRadios = document.querySelectorAll("input[name='contact']");
  const extraFields = document.getElementById("extraFields");
  const extraLabel = document.getElementById("extraLabel");

  contactRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      extraFields.classList.remove("hidden");
      if (this.value === "email") {
        extraLabel.textContent = "Enter your email address:";
      } else if (this.value === "phone") {
        extraLabel.textContent = "Enter your phone number:";
      } else {
        extraLabel.textContent = "Enter your mobile number for SMS:";
      }
    });
  });
});
