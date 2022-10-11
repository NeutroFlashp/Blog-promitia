import {NextPage} from "next";
import Image from "next/image";
import styles from "../../styles/Hero.module.css";

const Search: NextPage = () => {
    return (
        <span className={styles.search}>
            <Image src="/search.svg" alt="searchimg" width={15} height={15}/>
        </span>
    )
}

export default Search