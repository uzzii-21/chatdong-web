import PropTypes from 'prop-types'

const ImageCard = ({ src }) => (
  <div className="relative rounded-md overflow-hidden shadow-md">
    <img className="filter" src={src} alt="" />
  </div>
)

export default ImageCard

ImageCard.propTypes = {
  src: PropTypes.string.isRequired
}
