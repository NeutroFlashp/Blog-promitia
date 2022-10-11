import type { NextPage } from 'next'
import styles from "../../styles/Footer.module.css";
import Link from "./links"
import Logo from "./logo"
import LinkedinIcon from "../icons/linkedInIcon"
import InstagramIcon from "../icons/instagramIcon"
import FacebookIcon from "../icons/facebookIcon"

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <Logo />
                <div className={styles.footer_links}>
                    <Link url="demo" linkName="home"/>
                    <Link url="demo2" linkName="blog"/>
                    <Link url="demo2" linkName="contact"/>
                </div>
                <div className={styles.social_media_links}>
                    <LinkedinIcon theme="dark"/>
                    <InstagramIcon theme="dark"/>
                    <FacebookIcon theme="dark"/>
                </div>
            </div>
            <div className={styles.horizontal_line_links}>
                    <div className={styles.copyright_text_links}>
                        <p>Promitia©2022.</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer