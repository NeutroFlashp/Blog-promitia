import type { NextPage } from 'next'
import styles from "../../styles/Hero.module.css";
import Banner from './banner';
import Search from './search';

const Hero: NextPage = () =>{
    return (
        <div className={styles.bannercontainer}>
            <div className={styles.bannerimg}>
                <Banner/>
            </div>
            <div className={styles.bannercontent}>
                <div className={styles.bannertext}>
                    <h1>Search results for</h1>
                </div>
                <div className={styles.searchbanner}>
                    <form className={styles.searchform} action="#">
                        <button className={styles.searchbutton}>
                            <Search/>
                        </button> 
                        <input className={styles.searchinput} type="text" placeholder="What are you looking for?"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero



