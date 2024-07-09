document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    container.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        
        const color1 = 'rgb(44, 44, 44)'; // Custom color 1
        const color2 = 'rgb(54, 54, 54)'; // Custom color 2
        container.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color1} 0%, ${color2} 50%, black 100%)`;
    });
    });
