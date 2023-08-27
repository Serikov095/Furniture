const items = document.querySelectorAll('.item');
items.forEach(item =>{
    item.addEventListener ('mouseover',()=>{
        //Сперва удаляем класс
        removeFocus();
        item.classList.add('selected');
        
    })
//2 Потом опять добавляем дл того чтобы при увеличении на другую картинку первая возвращала свой размер
    removeFocus = () =>{
        items.forEach(item=>{
            item.classList.remove('selected');
        })
    }
})