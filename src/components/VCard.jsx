import { useState } from "react"
import QRCode from "qrcode.react"
import VCard from "vcard-creator"

export default function VCardComponent() {
  const [showQR, setShowQR] = useState(false)

  const generateVCard = () => {
    const myVCard = new VCard()
    
    myVCard
      .addName("AMOS", "David")
      .addCompany("Développeur Full Stack")
      .addEmail("david@example.com")
      .addPhoneNumber("+33 6 12 34 56 78", "CELL")
      .addURL("https://david-amos.com")
      .addSocial("https://linkedin.com/in/david-amos", "LinkedIn")
      .addSocial("https://github.com/david-amos", "GitHub")
    
    return myVCard.toString()
  }

  const downloadVCard = () => {
    const vcard = generateVCard()
    const blob = new Blob([vcard], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement("a")
    link.href = url
    link.download = "david-amos.vcf"
    link.click()
  }

  return (
    <div className="mt-8 space-y-4">
      <button
        onClick={() => setShowQR(!showQR)}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        {showQR ? "Masquer QR Code" : "Afficher QR Code"}
      </button>
      
      {showQR && (
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <QRCode 
            value={generateVCard()} 
            size={256}
            level="H"
            includeMargin={true}
          />
          <button
            onClick={downloadVCard}
            className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Télécharger vCard
          </button>
        </div>
      )}
    </div>
  )
}
