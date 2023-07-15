
import * as React from "react";
import * as styles from './index.scss';

interface IProps{
  name:string,
  width?: any,
}
export default React.memo((props:IProps)=>{
  return (
    <div className={styles.tagWrap}>
      <div className={styles.tag} style={{ width: `${props.width}px` }}>
        {props.name}
      </div>
    </div>
  );
})