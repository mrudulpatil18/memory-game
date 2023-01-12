
    const grid = document.querySelector('.grid');
    for(let i = 0;i < 4; i++){
        let line = document.createElement('div');
        line.classList.add('line');
        for(let j = 0; j < 4; j++){
            let element = document.createElement('div');
            element.classList.add('element');
            let card = document.createElement('img');
            
            card.src = 'cards/1.svg';
            element.appendChild(card);
            line.appendChild(element);
            
        }
        grid.appendChild(line);
    }
