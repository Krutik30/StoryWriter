export const ResultScreen = ({
    accuracy,
    speed,
    onRestart,
}: {
    accuracy: number;
    speed: number;
    onRestart: () => void;
}) => {
    return (
        <div style={styles.resultContainer}>
            <h1>Typing Results</h1>
            <p><strong>Accuracy:</strong> {accuracy.toFixed(2)}%</p>
            <p><strong>Speed:</strong> {speed.toFixed(2)} WPM</p>
            <button onClick={onRestart} style={styles.restartButton}>
                Restart Practice
            </button>
        </div>
    );
};

const styles = {
    resultContainer: {
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center" as const,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
    },
    restartButton: {
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        cursor: "pointer",
    },
};
