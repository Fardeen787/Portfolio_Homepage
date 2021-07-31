import React from 'react';
import './Services.css';
import Iframe from 'react-iframe'

export default function Services() {
  return(
    <>
            
    <section class = "contact-section">
      <div class = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div class = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class = "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga n</p>
      </div>


      <div class = "contact-body">
      <div className="ncontact">
         {/* <img src="images/img-home.jpg" alt="" /> */}
         <i class="fas fa-phone-volume">2132132132</i>
         <i class="fas fa-envelope-open-text">fdfdsfdfs</i>
         <i class="far fa-address-card">fsdfsff fsdfdddsfds dfddfs</i>
         
        </div>
        <div class = "contact-form">
          <form>
            <div>
              <input type = "text" class = "form-control" placeholder="First Name"/>
              <input type = "text" class = "form-control" placeholder="Last Name"/>
            </div>
            <div>
              <input type = "email" class = "form-control" placeholder="E-mail"/>
              <input type = "text" class = "form-control" placeholder="Phone"/>
            </div>
            <textarea rows = "5" placeholder="Message" class = "form-control"></textarea>
            <input type = "submit" class = "send-btn" value = "send message"/>
          </form>

          <div>
          {/* <img src="images/contact-png.png" alt="" /> */}
          </div>
        </div>
      </div>

      <div class = "map">
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119430.41705212812!2d76.95548309722072!3d20.702079943142056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73192c32a5df1%3A0xcfa72a91e826b253!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627454178514!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
      </div>

      {/* <div class = "contact-footer">
        <h3>Follow Us</h3>
        <div class = "social-links">
          <a href = "#" class = "fab fa-facebook-f"></a>
          <a href = "#" class = "fab fa-twitter"></a>
          <a href = "#" class = "fab fa-instagram"></a>
          <a href = "#" class = "fab fa-linkedin"></a>
          <a href = "#" class = "fab fa-youtube"></a>
        </div>
      </div> */}
    </section>


    </>
  )
}