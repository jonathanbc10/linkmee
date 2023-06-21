import { UserImg, Username } from './'
import { profileInfo } from '../data'

const ProfileInfo = () => {
    return (
        <section className='flex flex-col items-center'>
            <UserImg pic={profileInfo.pic} />
            <Username username={profileInfo.username} />
        </section>
    )
}

export default ProfileInfo
