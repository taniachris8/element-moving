import { generateRandomNumber } from "./app.js";

test("generateRandomNumber should generate a random number less than 4", () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeLessThanOrEqual(4);
});
