import PropTypes from 'prop-types'

const Username = ({ username }) => {
	return <h1 className='text-lg font-bold pt-4 mb-7'>@{username}</h1>
}

Username.propTypes = {
	username: PropTypes.string.isRequired
}

export default Username