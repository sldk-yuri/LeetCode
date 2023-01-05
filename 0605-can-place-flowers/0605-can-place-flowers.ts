function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if ((flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||
                (flowerbed[i - 1] === undefined && flowerbed[i + 1] === 0) ||
                (flowerbed[i + 1] === undefined && flowerbed[i - 1] === 0) ||
                (flowerbed[i - 1] === undefined && flowerbed[i + 1] === undefined && flowerbed[i] === 0)) {

                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n > 0 ? false : true;
};