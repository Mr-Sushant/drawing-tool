import React from 'react'
import styles from './index.module.css';
import { COLORS } from '@/constants';
import { useSelector } from 'react-redux';
import { MENU } from '@/constants';

const Toolbox = () => {

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const showStrokeToolOption = activeMenuItem === MENU.PENCIL;
    const showBrushToolOption = activeMenuItem === MENU.PENCIL || MENU.ERASER;

    function updateBrushSize(){
            //TOD0
    }

  return (
    <div className={styles.toolboxContainer}>
      {
      showStrokeToolOption && 
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
            {
                COLORS.map((COLOR) => (
                    <div className={styles.colorBox} key = {COLOR} style={{backgroundColor:COLOR.color}}/>
                ))
            }
        </div>
      </div>
      }
      {
        showBrushToolOption && 
        <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Size {activeMenuItem}</h4>
        <div className={styles.itemContainer}>
            <input type='range'  min={1} max={10} step={1} onChange={updateBrushSize}/>
        </div>
      </div>
      }
    </div>
  )
}

export default Toolbox
