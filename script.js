// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const addItemBtn = document.getElementById('addItemBtn');
    const removeItemBtn = document.getElementById('removeItemBtn');
    const itemList = document.getElementById('itemList');

    // Counter for new items
    let itemCount = 0;

    // Function to change text content
    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = `Text changed! Click count: ${++itemCount}`;
    });

    // Function to toggle CSS styles
    let isStyled = false;
    toggleStyleBtn.addEventListener('click', () => {
        isStyled = !isStyled;
        dynamicText.style.backgroundColor = isStyled ? '#ffd700' : '';
        dynamicText.style.padding = isStyled ? '10px' : '';
        dynamicText.style.borderRadius = isStyled ? '5px' : '';
    });

    // Function to add new item
    addItemBtn.addEventListener('click', () => {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = `Item ${++itemCount}`;
        itemList.appendChild(newItem);
    });

    // Function to remove last item
    removeItemBtn.addEventListener('click', () => {
        const items = itemList.getElementsByClassName('item');
        if (items.length > 0) {
            itemList.removeChild(items[items.length - 1]);
            itemCount--;
        }
    });
});