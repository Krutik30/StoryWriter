import React from "react";
import { useNavigate } from "react-router-dom";

export const PasteText = () => {
    const navigate = useNavigate();

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        const text = e.clipboardData.getData("text");
        localStorage.setItem("text", text);
        const firstWord = text.split(" ")[0];
        navigate(`/${firstWord}`);
    };

    return (
        <div
            onPaste={handlePaste}
            style={{
                border: "2px dashed #ccc",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "18px",
                color: "#666"
            }}
        >
            Paste your text here
        </div>
    );
};