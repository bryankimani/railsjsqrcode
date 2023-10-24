import { Controller } from "@hotwired/stimulus"
import QRCode from 'qrcode';

// Connects to data-controller="barcode"
export default class extends Controller {
  static targets = ["barcode", "barcodeImage"]

  connect() {

    let barcodeText = this.barcodeTarget.textContent;
    let cleanedBarcodeText = barcodeText.replace("Barcode: ", "")
    let barcodeImage = this.barcodeImageTarget

    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.8,
      margin: 1,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }

    QRCode.toDataURL(cleanedBarcodeText, opts, function (err, url) {
      if (err) throw err
      barcodeImage.src = url
    })
  }
}
