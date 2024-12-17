export const calculateAccuracy = (
    typedText: string,
    originalText: string,
    totalWrongChars: number
): number => {
    const correctChars = typedText.split("").filter((ch, index) => ch === originalText[index]).length;
    const totalTyped = typedText.length + totalWrongChars;
    return totalTyped > 0 ? (correctChars / totalTyped) * 100 : 100;
};

export const calculateSpeed = (typedText: string, startTime: number | null): number => {
    if (!startTime) return 0;

    const elapsedTimeInMinutes = (Date.now() - startTime) / 1000 / 60;
    const wordCount = typedText.trim().split(/\s+/).length;
    return elapsedTimeInMinutes > 0 ? wordCount / elapsedTimeInMinutes : 0;
};
