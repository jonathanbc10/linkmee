import PropTypes from 'prop-types'
import { ShareIcon } from '../assets'

const ShareButton = ({ classN, iconFill, link }) => {
    const defaultClasses = 'cursor-pointer transition duration-200 transform hover:scale-105 w-[40px] h-[40px] rounded-full bg-gray-200'

    const handleClick = async (e) => {
        e.preventDefault();
        const shareLink = link || window.location.href;
        await navigator.clipboard.writeText(shareLink);
        window.alert('Link copied to clipboard!');
    };

    return (
        <div className={classN ? classN : defaultClasses} onClick={handleClick}>
            <ShareIcon fill={iconFill ? iconFill : 'black'} />
        </div>
    )
}

ShareButton.propTypes = {
    classN: PropTypes.string,
    iconFill: PropTypes.string,
    link: PropTypes.string,
}

export default ShareButton