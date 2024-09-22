// <!-- tra cuu dat phong -->
// <!-- input OTP -->
    const otpInputs = document.querySelectorAll('.otp-field input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            if (value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
    });
// <!-- // Xóa giá trị của mỗi ô nhập -->
    function clearOtpInputs() {
        const otpInputs = document.querySelectorAll('.otp-field input');
        otpInputs.forEach((input) => {
            input.value = '';
        });
    }
// <!-- xoa sdt sao khi tra cuu -->
    function clearPhoneNumber() {
        const NumberInput = document.getElementById('SoDienThoaiTraCuu');
        NumberInput.value = '';
    }
    
// <!-- danh gia -->
// <!-- xoa du lieu -->
    function clearDataAssessInput() {
        const inputFields = document.getElementsByClassName('Assess');
        Array.from(inputFields).forEach((input) => {
            input.value = '';
        });
    }
// <!-- xoa so sao -->
    function clearStarAssess() {
        const radioOptions = document.getElementsByClassName('star');
        Array.from(radioOptions).forEach((radio) => {
            radio.checked = false;
        });
    }

