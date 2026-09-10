/**
 * PROGRAMMINGWALA - Accessible Form Validation Script
 * Validates course inquiries and contact requests without external libraries.
 */

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.js-contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;

      // Full Name
      const nameInput = form.querySelector('[name="fullName"]');
      const nameError = form.querySelector('#nameError');
      if (nameInput) {
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
          showError(nameInput, nameError, 'Please enter your full name (minimum 2 characters).');
          isValid = false;
        } else {
          clearError(nameInput, nameError);
        }
      }

      // Phone Number (Indian 10-digit mobile or +91 standard)
      const phoneInput = form.querySelector('[name="phone"]');
      const phoneError = form.querySelector('#phoneError');
      const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
      if (phoneInput) {
        const cleanPhone = phoneInput.value.replace(/[\s-]/g, '');
        if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
          showError(phoneInput, phoneError, 'Please enter a valid 10-digit mobile number (e.g., 7503962162).');
          isValid = false;
        } else {
          clearError(phoneInput, phoneError);
        }
      }

      // Email Address
      const emailInput = form.querySelector('[name="email"]');
      const emailError = form.querySelector('#emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput) {
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          showError(emailInput, emailError, 'Please enter a valid email address.');
          isValid = false;
        } else {
          clearError(emailInput, emailError);
        }
      }

      // Course Selection
      const courseSelect = form.querySelector('[name="courseInterest"]');
      const courseError = form.querySelector('#courseError');
      if (courseSelect) {
        if (!courseSelect.value) {
          showError(courseSelect, courseError, 'Please select a technical course or learning path.');
          isValid = false;
        } else {
          clearError(courseSelect, courseError);
        }
      }

      // Message (Optional or min length)
      const messageInput = form.querySelector('[name="message"]');
      const messageError = form.querySelector('#messageError');
      if (messageInput && messageInput.hasAttribute('required')) {
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
          showError(messageInput, messageError, 'Please provide details about your learning goals (min 10 characters).');
          isValid = false;
        } else {
          clearError(messageInput, messageError);
        }
      }

      if (isValid) {
        const successBanner = form.querySelector('.form-success-banner');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerText = 'Transmitting Inquiry...';
        }

        setTimeout(() => {
          if (successBanner) {
            successBanner.classList.add('visible');
            successBanner.setAttribute('role', 'alert');
            successBanner.focus();
          }
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Inquiry Received';
          }
        }, 600);
      }
    });
  });

  function showError(input, errorElement, message) {
    input.setAttribute('aria-invalid', 'true');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('visible');
    }
  }

  function clearError(input, errorElement) {
    input.removeAttribute('aria-invalid');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
    }
  }
});
