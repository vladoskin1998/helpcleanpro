import { baseURL } from "../../utils/utils"

export const Loader = () => {
    return (
        <div className="loader flex-all-center">
            <img src={ "/Images/aboutlogo.png"} alt="help clean pro" />
        </div>
    )
}


export const CircleLoader = () => {
    return <div className="loader-spin-wrapper">
        <span className="loader-spin"></span>
    </div>
}    