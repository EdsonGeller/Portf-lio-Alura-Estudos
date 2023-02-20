import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu(){
  const rotas = [{
    label:'Inicio',
    to: '/'},
  {
    label:'Cardapio',
    to:'/cardapio'
  },
  {
    label:'Sobre',
    to: '/sobre'
  },
  ];
  return(
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menuList}>
        {rotas.map((rota, index) => 
          <li key={index} className={styles.menuLink}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li> )}
      </ul>
    </nav>
  );
}