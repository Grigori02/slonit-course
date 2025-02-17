const secretNumberGame = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`secretNumber: ${secretNumber}`);
    
    let low = 1;
    let high = 100;
    let attempts = 0;
    
    while (true) {
        attempts++;
        let guess = Math.floor((low + high) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}.`);
        
        if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            low = guess + 1;
        } else if (guess > secretNumber) {
            console.log("Компьютер 1: Меньше.");
            high = guess - 1;
        } else {
            console.log("Компьютер 1: Угадал!");
            console.log(`Число попыток: ${attempts}`);
            break;
        }
    }
}

secretNumberGame();
