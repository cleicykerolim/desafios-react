//Importando uma biblioteca para datas. instalando com: npm add date-fns
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

//Importando o styles.module do header
import styles from './styles.module.scss';

export function Header(){
	const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
		locale: ptBR,
	});
	
	return (
		//Tá pegando a class headerContainer do css de style.module
		//O span tá pegando a data
		<header className={styles.headerContainer}>
			<img src="/logo.svg" alt="logo" />
		
			<p>O melhor para você ouvir, sempre</p>

			<span>{currentDate}</span> 
		</header>
	)
}