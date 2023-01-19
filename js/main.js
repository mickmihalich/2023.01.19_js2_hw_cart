// Дивлячись на те що з базою ми ще не працюємо, 
// то треба буде зафіксувати тут декілька змінних
// для їх подальшої модернізації

const addItems = document.querySelector('.add_new_item');

function crateItem(){
    const divItem = document.createElement('div');    
    divItem.classList.add('cart_item');
    console.log(divItem);
    const cart_container_temp = document.querySelector('.cart_container');
    cart_container_temp.append(divItem);
}

addItems.addEventListener('click', () => {
    console.log('click by add new item');
    crateItem();
})

