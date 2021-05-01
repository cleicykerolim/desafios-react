import '../styles/global.scss'
// Esse App.js é o arquivo global, sempre é reiniciado
import { Header } from "../components/Header";
import { Player } from "../components/Player";

//nesse arquivo de estilo deixa o header até o player
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
  	<div className={styles.wrapper}>
  		<main>
	  		<Header />
	  		<Component {...pageProps} />
  		</main>
  		<Player />
  	</div>
  	)
}

export default MyApp
