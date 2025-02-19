const createLogger = () => {
    let logs = [];
    return {
        log: (message) => logs.push(message),
        getLogs: () => logs,
    };
}

const createRandomGenerator = (min, max) => {
    return () => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const logger = createLogger();
logger.log("message_1");
logger.log("message_2");
console.log(logger.getLogs());

const randomGen = createRandomGenerator(1, 10);
console.log(randomGen());
console.log(randomGen());
