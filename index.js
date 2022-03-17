const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const reducer = (accumulator, batteryBatches) {
    const totalBatteries = batteryBatches.reduce((partialSum, battery) => partialSum + battery, 0);
    
    console(totalBatteries);
// }