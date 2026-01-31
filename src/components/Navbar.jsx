import {navIcons, navLinks} from "#constants/index.js";
import dayjs from "dayjs";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt=""/>
                <p className="font-bold">Moctar's Portfolio</p>

                <ul>
                    {navLinks.map(({id, name}) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) =>(
                        <li key={id}>
                            <img src={img} className={"icon-hover"} alt={`icon-${id}`}/>
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd D MMM hh:mm A')}</time>
            </div>
        </nav>
    )
}
export default Navbar
