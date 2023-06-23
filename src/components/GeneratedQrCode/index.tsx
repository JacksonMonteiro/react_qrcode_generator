import QRCode from "react-qr-code";
import { Container, QrCodeContainer, Title } from "./styles";
import { Button } from "../../styles";

export const GeneratedQrCode = ({ qrCodeValue }: any) => {
    const handleClick = () => {
        console.log("clicou");

        const svg = document.getElementById("generatedQrCode");
        const svgData = new XMLSerializer().serializeToString(svg!);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const image = new Image();
        image.onload = () => {
            canvas.width = image.width + 40;
            canvas.height = image.height + 40;
            context?.strokeRect(0, 0, canvas.width, canvas.height);
            context!.fillStyle = "#FFFFFF";
            context?.fillRect(0, 0, canvas.width, canvas.height);
            context?.drawImage(image, 20, 20);
            const pngFile = canvas.toDataURL("image/png");

            const downloadLink = document.createElement("a");
            downloadLink.download = "qrcode";
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };

        image.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <>
            {qrCodeValue !== undefined && qrCodeValue.length > 0 ? (
                <Container>
                    <Title>Scan your QR Code</Title>
                    <QrCodeContainer>
                        <QRCode
                            id="generatedQrCode"
                            size={480}
                            value={qrCodeValue}
                        />
                    </QrCodeContainer>
                    <Button onClick={handleClick}>Download QR Code</Button>
                </Container>
            ) : null}
        </>
    );
};
