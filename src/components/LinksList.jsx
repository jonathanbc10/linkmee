import { links } from '../data';
import { LinkButton } from './';

const LinksList = () => {
    return (
        <section>
            <ul>
                {links.map(links => (
                    <li key={links.name}>
                        <LinkButton
                            name={links.name}
                            link={links.link}
                            icon={links.icon}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}


export default LinksList