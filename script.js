const sidebarItems = document.querySelectorAll('.sidebar .item');

const tableRows = document.querySelectorAll('.main table tbody tr');

sidebarItems.forEach(sideItem =>{
    sideItem.addEventListener('click', () =>{
        sidebarItems.forEach(item =>{
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

tableRows.forEach(tableTR =>{
    tableTR.addEventListener('click', () =>{
        tableRows.forEach(item =>{
            item.classList.remove('active');
        });
        tableTR.classList.add('active');
    });
});