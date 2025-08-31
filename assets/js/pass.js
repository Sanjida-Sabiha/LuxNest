document.addEventListener('DOMContentLoaded', function () {
    const passwordInputs = document.querySelectorAll('#passwordInput, #passwordInputs, #passwordInput3');
    const togglePasswordIcons = document.querySelectorAll('#togglePasswordIcon, #togglePasswordIcons, #togglePasswordIcon3');

    passwordInputs.forEach((passwordInput, index) => {
        const togglePasswordIcon = togglePasswordIcons[index];
        if (!togglePasswordIcon) return;

        let isPasswordVisible = false;

        togglePasswordIcon.addEventListener('click', function () {
            isPasswordVisible = !isPasswordVisible;
            passwordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');

            // Swap the icon SVG path
            togglePasswordIcon.innerHTML = isPasswordVisible
                ? `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6874 10.062C15.6874 12.099 14.0354 13.7498 11.9984 13.7498C9.96138 13.7498 8.31055 12.099 8.31055 10.062C8.31055 8.02382 9.96138 6.37299 11.9984 6.37299C14.0354 6.37299 15.6874 8.02382 15.6874 10.062Z" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9964 18.5807C16.439 18.5807 20.5025 15.3864 22.7904 10.0617C20.5025 4.73706 16.439 1.54272 11.9964 1.54272H12.001C7.55836 1.54272 3.49486 4.73706 1.20703 10.0617C3.49486 15.3864 7.55836 18.5807 12.001 18.5807H11.9964Z" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
                : `<path d="M9.38776 12.7613C8.71693 12.0916 8.30859 11.1816 8.30859 10.1608C8.30859 8.1156 9.95593 6.4671 11.9999 6.4671C13.0114 6.4671 13.9424 6.8766 14.6016 7.54627" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M15.6219 10.8154C15.3513 12.3204 14.1659 13.508 12.6621 13.781" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M5.76384 16.3843C3.91234 14.9307 2.34434 12.8073 1.20801 10.1602C2.35601 7.50135 3.93451 5.36635 5.79767 3.90101C7.64917 2.43568 9.78534 1.64001 11.9997 1.64001C14.2268 1.64001 16.3618 2.44735 18.225 3.92318" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M20.6892 6.48926C21.4919 7.55559 22.1977 8.78642 22.7916 10.1596C20.4967 15.4761 16.4414 18.6786 11.9999 18.6786C10.9931 18.6786 10.0002 18.5153 9.0459 18.1968" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M21.2018 0.957855L2.79883 19.3609" stroke="#4D4D53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
        });
    });
});