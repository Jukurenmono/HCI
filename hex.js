let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

    let btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        let i = parseInt((Math.random()*colors.length)+1);

        let canvas = document.getElementById('main');

        main.style.background = `${colors[i]}`
    })