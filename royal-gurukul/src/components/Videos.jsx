import React from "react";


function Videos() {

const videos = [
{
title:"Spoken English Tips",
link:"https://www.youtube.com/watch?v=JsYs_nh-Bjo"
},

{
title:"Personality Development",
link:"https://www.youtube.com/watch?v=VIDEO_ID_2"
},

{
title:"Interview Preparation",
link:"https://www.youtube.com/watch?v=VIDEO_ID_3"
}

];


return (

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
videos.map((video,index)=>{

const videoId = video.link.split("v=")[1];


return (

<div className="video-card" key={index}>


<iframe

src={`https://www.youtube.com/embed/${videoId}`}

title={video.title}

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

allowFullScreen

></iframe>



<h3>
{video.title}
</h3>


<p>
Click to watch video
</p>


</div>

)

})

}


</div>


</section>

)

}


export default Videos;