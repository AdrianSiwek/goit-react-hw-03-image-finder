
import styles from './Searchbar.module.css';

const Searchbar = () => {
    return ( 
        <header className={styles.searchbar}>
  <form class="form">
    <button type="submit" className={styles.button}>
      <span className={styles.buttonLabel}>Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
     );
}
 
export default Searchbar;