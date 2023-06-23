import { Button } from "../../styles";
import { Container, Description, Input, Title } from "./styles";

export const QrCodeValueInput = ({
    qrCodeValue,
    handleInput,
    handleClick,
}: any) => {
    return (
        <Container>
            <Title>Input the value of Qr code Will receive</Title>
            <Description>
                After input value, click on generate qr code button and one Qr Code with text value inputted by you will be created
            </Description>
            <Input value={qrCodeValue} onChange={handleInput} />
            <Button onClick={handleClick}>Genarate QR Code</Button>
        </Container>
    );
};
