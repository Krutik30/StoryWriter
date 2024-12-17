import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Celebration = () => {
    const { width, height } = useWindowSize();
    return (
        <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.4}
        />
    );
};
