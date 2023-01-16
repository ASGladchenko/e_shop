import './styles.scss'

const FooterOrder = ({className}) => (
    <div className={className ? `${className} footer__order` : 'footer__order'}>
        <p className='mb-2 d-none d-sm-block'>Order</p>
        <p className='get_in_touch text-uppercase fw-bolder' role='button'>+38 (050) 000-00-00</p>
        <p className='mb-2 d-none d-sm-block'>We accept orders</p>
        <p className='text-uppercase fw-bolder work-schedule d-none d-sm-block'>Round the Clock</p>
    </div>
)

export default FooterOrder;