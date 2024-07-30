
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('evading-button');
    const container = document.querySelector('.button-container');

    button.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const offset = 10; // Distance to move the button

        let newLeft = Math.random() * (containerRect.width - buttonRect.width);
        let newTop = Math.random() * (containerRect.height - buttonRect.height);

        // Ensure the button stays within the container
        newLeft = Math.min(newLeft, containerRect.width - buttonRect.width - offset);
        newTop = Math.min(newTop, containerRect.height - buttonRect.height - offset);

        button.style.position = 'absolute';
        button.style.left = `${newLeft}1px`;
        button.style.top = `${newTop}px`;
    });
});
