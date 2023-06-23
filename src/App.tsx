import { useState } from "react";
import "./App.css";
import { GeneratedQrCode } from "./components/GeneratedQrCode";
import { QrCodeValueInput } from "./components/QrCodeValueInput";
import { Container } from "./styles";

function App() {
    const [inputValue, setInputValue] = useState<String>('');
    const [qrCodeValue, setQrCodeValue] = useState<String>('');

    const handleInput = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setQrCodeValue(inputValue);
    };

    return (
        <Container>
            <QrCodeValueInput
                qrCodeValue={inputValue}
                handleInput={handleInput}
                handleClick={handleClick}
            />
            <GeneratedQrCode qrCodeValue={qrCodeValue} />
        </Container>
    );
}

export default App;
