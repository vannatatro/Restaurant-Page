const loadMenu = function() {
    let content = document.getElementById('content');
    let menu_middle = document.createElement('div');
    menu_middle.classList.add('menu-middle');
    let menu = document.createElement('div');
    menu.classList.add('menu');
    let appetizers = document.createElement('div');
    appetizers.classList.add('appetizers');
    let appetizersH2 = document.createElement('h2');
    appetizersH2.textContent = "Appetizers";
    appetizers.append(appetizersH2);

    let appetizersSubDiv = document.createElement('div')
    appetizers.append(appetizersSubDiv)

    let entrees = document.createElement('div');
    entrees.classList.add('entrees');
    let entreesH2 = document.createElement('h2');
    entrees.append(entreesH2);
    entreesH2.textContent = "Entrees";
    let entreesSubDiv = document.createElement('div')
    entrees.append(entreesSubDiv)
    let desserts = document.createElement('div');
    desserts.classList.add('desserts');
    let dessertsH2 = document.createElement('h2');
    dessertsH2.textContent = "Desserts";
    desserts.append(dessertsH2);
    let dessertsSubDiv = document.createElement('div')
    desserts.append(dessertsSubDiv)

    let a = 0;
    while (a < 6) {
        let menu_item = document.createElement('div');
        menu_item.classList.add('menu-item')
        let menu_div = document.createElement('div')
        menu_div.classList.add('menu_div')
        let menu_item_h3 = document.createElement('h3');
        menu_item_h3.textContent = "Name";
        let menu_item_desc = document.createElement('p');
        menu_item_desc.textContent = "Description";
        let menu_item_price = document.createElement('p');
        menu_item_price.textContent = "$0.00";
        menu_item.append(menu_item_h3, menu_item_desc, menu_item_price);
        menu_div.append(menu_item)
        menu_div.style.display = 'flex'
        appetizersSubDiv.append(menu_div);
        a++;
    }

    let e = 0
    while (e < 10) {
        let menu_item = document.createElement('div');
        menu_item.classList.add('menu-item')
        let menu_div = document.createElement('div')
        menu_div.classList.add('menu_div')
        let menu_item_h3 = document.createElement('h3');
        menu_item_h3.textContent = "Name";
        let menu_item_desc = document.createElement('p');
        menu_item_desc.textContent = "Description";
        let menu_item_price = document.createElement('p');
        menu_item_price.textContent = "$0.00";
        menu_item.append(menu_item_h3, menu_item_desc, menu_item_price);
        menu_div.append(menu_item)
        entreesSubDiv.append(menu_div);
        e++;
    }

    let d = 0
    while (d < 3) {
        let menu_item = document.createElement('div');
        menu_item.classList.add('menu-item')
        let menu_div = document.createElement('div')
        menu_div.classList.add('menu_div')
        let menu_item_h3 = document.createElement('h3');
        menu_item_h3.textContent = "Name";
        let menu_item_desc = document.createElement('p');
        menu_item_desc.textContent = "Description";
        let menu_item_price = document.createElement('p');
        menu_item_price.textContent = "$0.00";
        menu_item.append(menu_item_h3, menu_item_desc, menu_item_price);
        menu_div.append(menu_item)
        dessertsSubDiv.append(menu_div);
        d++;
    }

    menu.append(appetizers, entrees, desserts)
    menu_middle.append(menu)
    content.append(menu_middle)
}

export default loadMenu;