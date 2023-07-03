import PropTypes from 'prop-types'
import ShareButton from './ShareButton'

const LinkButton = ({ name, link, icon }) => {
    const IconComponent = icon
    return (
        <a
            href={link}
            target='_blank'
            className='w-[100%] h-14 bg-[#252525] my-2 
            rounded-2xl text-white no-underline flex 
            justify-between items-center transition duration-200 transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500'
            rel="noreferrer"
        >
            <div className=''>
                {IconComponent && <IconComponent className='w-9 mx-2' />}
            </div>
            <p>{name}</p>
            <ShareButton link={link} classN='m-2 w-10 h-10 rounded-full bg-[#343434]' iconFill={'#a0a0a0'} />
        </a>
    )
}

LinkButton.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
}

export default LinkButton
