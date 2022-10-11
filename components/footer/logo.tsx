import {NextPage} from "next";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";


const Logo: NextPage = () => {
    return (
        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Promitia Logo" width={72} height={76} />
        </span>
    )
}

export default Logo