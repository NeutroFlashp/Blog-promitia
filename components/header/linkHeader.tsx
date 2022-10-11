import type { NextPage } from 'next'
import styles from "../../styles/Header.module.css";

type linkType = {
    label: string;
    href: string;
};

const LinkHeader: NextPage<linkType> = (props: linkType) =>{
    return <div key={props.href} className={styles.links}>
                <a href={props.href}>
                    {props.label}
                </a>
            </div>
}
export default LinkHeader
