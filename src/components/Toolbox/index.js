import React from 'react'
import styles from './index.module.css';
import { COLORS } from '@/constants';


const Toolbox = () => {
    function updateBrushSize(){
            //TOD0
    }

  return (
    <div className={styles.toolboxContainer}>
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
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Size</h4>
        <div className={styles.itemContainer}>
            <input type='range'  min={1} max={10} step={1} onChange={updateBrushSize}/>
        </div>
      </div>
    </div>
  )
}

export default Toolbox
