import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import { TbFaceIdError } from 'react-icons/tb';
import { RiHomeHeartLine} from 'react-icons/ri'


const NotFoundPage = () => {
  return <div className={css.container}>
    <p className={css.message}>Page not found <TbFaceIdError/> </p>
    <Link to="/" className={css.link}>To Home page
      <RiHomeHeartLine className={css.icon} />
    </Link> 
  </div>
}

export default NotFoundPage;