import { flashcard } from "./flashcard";

describe('flashcard', () => {
    it('should create an instance', () => {
        expect(new flashcard(0, "", "")).toBeTruthy();
    });
});