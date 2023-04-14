import React from 'react'

function Portfolio( { title, author, content } ) {
  return (
    <div className="col-md-12 portfolio-item container white-div text-center margin-portfolio hotizontal-center">
    <div>
      <div>
        {/* <image src="{{MEDIA_URL}}{{post.image}}" class="img-left" width='20%' alt="portfolio image"/> */}
      </div>
      <div class="portfolio-info white-div padding-top-2">
        <h3>{title}</h3>
        <h5><em>{author}</em></h5>
        <p>{content}</p>
      </div>
    </div>
  
</div>
  )
}

export default Portfolio