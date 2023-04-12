

window.onload = () => {
    let mainCont1 = document.querySelector('#main-cont1-c2')
    let json = [
        {
            'src':'	https://basket-09.wb.ru/vol1308/part130817/130817326/images/big/2.jpg',
            'price':'$5000.90'
        },
        {
            'src':'	https://basket-10.wb.ru/vol1348/part134846/134846043/images/big/1.jpg',
            'price':'$5000.90'
        },
        {
            'src':'https://basket-04.wb.ru/vol464/part46485/46485320/images/big/1.jpg',
            'price':'$5000.90'
        },
        {
            'src':'https://basket-10.wb.ru/vol1348/part134843/134843055/images/big/1.jpg',
            'price':'$5001.90'
        },
        {
            'src':'https://basket-10.wb.ru/vol1348/part134831/134831884/images/big/1.jpg',
            'price':'$5000.90'
        },
    ]
    const addItem = () => {
        let template = document.querySelector('#item');
        json.map(jsonItem =>{
            let{src,price} = jsonItem;
            let item = template.cloneNode(true);
            item.querySelector('img').src = src
            item.querySelector('h3').innertext = price
            mainCont1.append(item)
            console.log(1)
        });
    }

    addItem()
}
