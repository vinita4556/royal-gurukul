function Contact(){

return(

<section id="contact" className="contact">


<div className="section-title">

<h2>
Contact Us
</h2>

<p>
Start your English learning journey today.
</p>

</div>



<div className="contact-grid">



<div className="contact-info">


<h3>
Royal Gurukul Spoken English
</h3>


<p>
📍 Bima Road Opposite Pioneer School
</p>


<p>
📞 +91 7773806367
</p>


<p>
✉️ royalgurukul@gmail.com
</p>



<a
href="tel:+917773806367"
className="contact-btn"
>

Call Now

</a>



<a
href="https://wa.me/917773806367"
target="_blank"
rel="noreferrer"
className="contact-btn whatsapp"
>

WhatsApp

</a>


</div>




<div className="map">


<iframe

title="Google Map"

src="https://www.google.com/maps?q=India&output=embed"

width="100%"

height="350"

style={{
border:0,
borderRadius:"15px"
}}

loading="lazy"

>

</iframe>


</div>



</div>


</section>

)

}


export default Contact;