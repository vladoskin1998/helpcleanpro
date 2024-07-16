import { IconsChevronTop } from "./Icons"
import { Link as ScrollLink } from "react-scroll"
export const ButtonTop = () => {
    return (
        <ScrollLink to="main" smooth={true} duration={700}>
            <button className="button-to-top">
                <IconsChevronTop />
            </button>
        </ScrollLink>
    )
}
