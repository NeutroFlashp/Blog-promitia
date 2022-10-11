import {NextPage} from "next";
import styles from "../../styles/Footer.module.css";

interface PropsLink {
    url: string
    linkName: string,
}

const Link: NextPage<PropsLink> = (props: PropsLink) => {
    return (
        <a className={styles.footer_link} href={props.url} >{props.linkName}</a>
    )
}

export default Link