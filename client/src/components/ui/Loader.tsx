import { baseURL } from "../../utils/utils"

export const Loader = () => {
    return (
        <div className="loader flex-all-center">
            <img src={baseURL + "/Images/aboutlogo.svg"} alt="" />
        </div>
    )
}
