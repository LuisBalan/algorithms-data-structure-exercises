const staircaseGenerator = (n) => {
    let space = ' ';
    let char = '#';
    for(let i = 1; i <= n; i++){
        let line = '';
        for(let j = 1; j <= n-i; j++){
            line += space;
        }
        // line += space.repeat(n-1);
        line += char.repeat(i);
        console.log(line);
    };
};

staircaseGenerator(50)