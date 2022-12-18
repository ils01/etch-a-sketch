let size = 12;
draw(size);

const btn = document.querySelector('#ask');
btn.addEventListener('click', function(){
    do{
        size = prompt("? x ? squares? (16x16, 4x4)")
    } while(size < 0 || size > 100)
    draw(size);
})

function draw(size){
    let main = document.getElementById('main');
    main.innerHTML='';
    for(let i = 0; i < size*size; i++){
        let elt = document.createElement('div');

        elt.style.height = `${800/size}px`;
        elt.style.flexBasis =`${100/size}%`;

        elt.classList.add('element');
        main.appendChild(elt);
    }
    
    document.querySelectorAll('.element').forEach(item => {
        item.addEventListener('mouseover', function(){
            let color1 = Math.floor(Math.random() * 256);
            let color2 = Math.floor(Math.random() * 256);
            let color3 = Math.floor(Math.random() * 256);
            item.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        })
    })
}


