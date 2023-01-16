import './styles.scss'
import {useNavigate} from "react-router-dom";

const Logo = ({path, width, className})=>{
    const navigate = useNavigate()
    const home = () => navigate('/', {replace: true})
    return (
        <div onClick={() => home()} className={className && className} role='button' style={{maxWidth: width}}>
            <img src={path} className='d-block w-100'/>
        </div>
    )

}

export default Logo;