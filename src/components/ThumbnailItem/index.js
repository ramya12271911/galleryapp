// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, selectedImageId} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailDetails

  const onclickthumbnail = () => {
    selectedImageId(id)
  }

  return (
    <li className="list-item">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail"
          onClick={onclickthumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
