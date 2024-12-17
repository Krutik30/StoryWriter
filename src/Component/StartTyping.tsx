import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { PasteText } from "./PasteText";

export const StartTyping = () => {

    const navigate = useNavigate();

    const handleSample = () => {
        navigate('/sample')
    }

    return (
        <div>
            <Button
                onClick={handleSample}
            >
                Start Sample
            </Button>
            <PasteText />
        </div>
    )
}