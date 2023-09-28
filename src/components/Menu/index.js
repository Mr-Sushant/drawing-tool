import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import { MENU } from '@/constants';
import { menuItemClick, actionItemClick } from '@/slice/menuSlice';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { useSelector } from 'react-redux';

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  function handleMenuClick(itemName){
      dispatch(menuItemClick(itemName));
  }

  return (
    <div className={styles.menuContainer}>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU.PENCIL})} onClick={() => handleMenuClick(MENU.PENCIL)}>
        <FontAwesomeIcon icon={faPencil} className={styles.icon}  />
      </div>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU.ERASER})} onClick={() => handleMenuClick(MENU.ERASER)}>
        <FontAwesomeIcon icon={faEraser} className={styles.icon}  />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} onClick={() => handleMenuClick(MENU.UNDO)} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} onClick={() => handleMenuClick(MENU.REDO)} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} onClick={() => handleMenuClick(MENU.DOWNLOAD)} />
      </div>
    </div>
  )
}

export default Menu;
