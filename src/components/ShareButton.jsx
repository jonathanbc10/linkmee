import PropTypes from 'prop-types'
import { ShareIcon } from '../assets'

const ShareButton = ({ classN, iconFill, link }) => {
  const defaultClasses = 'cursor-pointer transition duration-200 transform hover:scale-105 w-[40px] h-[40px] rounded-full bg-gray-200'

  const handleCopy = (e) => {
    e.preventDefault()
    const shareLink = link || window.location.href;

    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = shareLink;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.body.removeChild(input);

    window.alert('Link copied to clipboard!');
  };

  return (
    <button className={classN ? classN : defaultClasses} onClick={handleCopy}>
      <ShareIcon fill={iconFill ? iconFill : 'black'} />
    </button>
  )
}

ShareButton.propTypes = {
  classN: PropTypes.string,
  iconFill: PropTypes.string,
  link: PropTypes.string,
}

export default ShareButton
