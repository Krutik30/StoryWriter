export const Character = ({ ch, isCorrect }: { ch: string, isCorrect: boolean | null }) => {
    const style = {
        regular: {
            padding: 2,
            margin: 0.5,
            borderRadius: 2,
            fontSize: 25,
            touchAction: "none"
        },
        correct: {
            backgroundColor: "lightgreen",
            padding: 2,
            margin: 0.5,
            borderRadius: 2,
            fontSize: 25,
            touchAction: "none"
        },
        incorrect: {
            backgroundColor: "lightcoral",
            padding: 2,
            margin: 0.5,
            borderRadius: 2,
            fontSize: 25,
            touchAction: "none"
        }
    };

    const getStyle = () => {
        if (isCorrect === null) return style.regular;
        return isCorrect ? style.correct : style.incorrect;
    };

    return (
        <span style={getStyle()}>
            {ch}
        </span>
    );
};
