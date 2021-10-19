import { imageUrlFor, buildImageObj } from './image-helpers'

export default ({ text, title, writer, date, image }) => (
    <div className="post-box">
      <h1>{title}</h1>
      <p>
        {// first 20 words
        text.split(' ').length < 20 ? text : text.split(' ').slice(0, 20).join(' ')}...
      </p>
      <img 
        src={ 
          image?
            imageUrlFor(buildImageObj(image))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .url() : "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"
          }
      alt=""
      />
      <p>{writer?.fullName || ''}</p>
      <p>{date}</p>
    </div>
)