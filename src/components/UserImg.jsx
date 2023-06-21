import PropTypes from 'prop-types'

const UserImg = ({ pic }) => {
  return (
    <div className="w-[108px]">
      <img className='rounded-full h-full' src={pic} />
    </div>
  )
}

UserImg.propTypes = {
  pic: PropTypes.string.isRequired
}

export default UserImg
