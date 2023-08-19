import './index.css'

const Image = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <li className="image-item">
      <img src={imageUrl} alt={imageAltText} className="imagestyle" />
    </li>
  )
}

export default Image
