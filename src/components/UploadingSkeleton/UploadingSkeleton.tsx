import PropTypes from 'prop-types'

const UploadingSkeleton = ({ src, percent = 100 }) => (
  <div className="relative rounded-md overflow-hidden">
    <img className="filter" src={src} alt="" />
    <div className="backdrop-blur-sm bg-gray-500/30 absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <div>
        <svg
          className="mx-auto h-20 w-20 text-gray-100"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="h-1 rounded-2xl bg-gray-100 mt-2"
          style={{ width: percent }}
        />
      </div>
    </div>
  </div>
)

export default UploadingSkeleton

UploadingSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired
}
