import { useState, useRef, useEffect } from "react";
import { stringToArray } from "../utils/stringToArray";
import { Character } from "./Character";
import "../css/typer.css";

export const Typer = ({ text }: { text: string }) => {
    const [typedText, setTypedText] = useState("");
    const [startTime, setStartTime] = useState<number | null>(null);
    const [tooltip, setTooltip] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const textArray = stringToArray(text);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setTypedText(newText);

        if (!startTime) {
            setStartTime(Date.now());
            setTooltip(false);
        }

        if (containerRef.current) {
            const currentTypedPosition = newText.length * 10;
            containerRef.current.scrollTo({
                top: 0,
                left: currentTypedPosition - 100,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div className="typer-container">
            <h1>Type Your Story</h1>
            {tooltip && <div className="tooltip">Start typing...</div>}

            <div className="text-container" ref={containerRef}>
                {textArray.map((ch, index) => {
                    const isCorrect = typedText[index] === ch;
                    const isTyped = index < typedText.length;
                    return (
                        <Character
                            key={index}
                            ch={ch}
                            isCorrect={isTyped ? isCorrect : null}
                        />
                    );
                })}
            </div>

            <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleInputChange}
                className="hidden-input"
                autoFocus
            />
        </div>
    );
};
