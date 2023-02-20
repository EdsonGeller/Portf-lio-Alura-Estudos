import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './TagsPratos.module.scss';

export default function TagsPratos({
  category,
  size,
  serving,
  price
}: Prato){
  return(
    <div className={styles.tags}>
      <div className={classNames({
        [styles.item__tipo]: true,
        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}