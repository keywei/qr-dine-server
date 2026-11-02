import QRCode from 'qrcode';

export const generateQrDataUrl = async (
  text: string,
  colorDark = '#1e293b'
): Promise<string> => {
  return QRCode.toDataURL(text, {
    width: 360,
    margin: 2,
    color: {
      dark: colorDark,
      light: '#ffffff',
    },
  });
};
