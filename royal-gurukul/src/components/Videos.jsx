function Videos(){

const videos = [
{
title:"Spoken English Tips",
link:"https://youtube.com/@YOUR_CHANNEL"
},

{
title:"Personality Development",
link:"https://youtube.com/@YOUR_CHANNEL"
},

{
title:"Interview Preparation",
link:"https://youtube.com/@YOUR_CHANNEL"
}

];


return(

<section id="videos" className="videos">


<div className="section-title">

<h2>
Our YouTube Videos
</h2>

<p>
Learn English through our practical videos.
</p>

</div>



<div className="video-grid">


{
videos.map((video,index)=>(


<a 
key={index}
href={video.link}
target="_blank"
rel="noreferrer"
className="video-card"
>


<div className="video-box">

▶

</div>


<h3>
{video.title}
</h3>


<p>
Click to watch on YouTube
</p>


</a>


))
}



</div>


</section>


)

}


export default Videos;