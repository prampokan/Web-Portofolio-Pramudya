import React from "react"

const contact = () => {
    const phoneNumber = '6281250861588'
    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`
        window.open(url, '_blank')
    };

    const emailAddress = 'pramudyadiagusta@gmail.com'
    const handleEmail = () => {
        const url = `mailto:${emailAddress}`
        window.location.href = url
    }

    return (
        <div className="contact">
            <div className="content-contact">
                <div className="text-contact">
                    <h3>contact</h3>
                    <h5>Get in touch with me 👇🏻</h5>
                </div>
                <div className="details-contact">
                    <div className="detail-contact">
                        <a href="#" onClick={handleWhatsapp}><i class="fa-brands fa-whatsapp wa"></i></a>
                        <div className="inner-contact">
                            <h5>Whatsapp</h5>
                            <a>+62 812-5086-1588</a>
                        </div>
                    </div>
                    <div className="detail-contact">
                        <a href="#" onClick={handleEmail}><i class="fa-regular fa-envelope mail"></i></a>
                        <div className="inner-contact">
                            <h5>Email</h5>
                            <a>pramudyadiagusta@gmail.com</a>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default contact