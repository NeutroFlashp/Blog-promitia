import {NextPage} from "next";
import Image from "next/image";
import styles from "../../styles/Hero.module.css";

const Banner: NextPage = () => {
    return (
        <span className={styles.banner}>
            <Image src="/banner.jpg" alt="bannerimg" layout="fill"/>
        </span>
    )
}

export default Banner
