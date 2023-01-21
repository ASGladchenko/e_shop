import './styles.scss'
import {useNavigate} from "react-router-dom";

const Logo = ({path, width, className})=>{
    const navigate = useNavigate()
    const home = (url) => navigate(url, {replace: true})
    return (
        <div onClick={() => home('/')} className={className && className} role='button' style={{maxWidth: width}}>
            <img src={path} className='d-block w-100' alt='Logo'/>
        </div>
    )

}

export default Logo;