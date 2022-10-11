import {NextPage} from "next";
// import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import {SocialMediaIconsProps} from "../../interfaces/footer.interface";


const FacebookIcon: NextPage<SocialMediaIconsProps> = (props: SocialMediaIconsProps) => {
    return (
        <svg version="1.0" className={props.theme==="dark" ? styles.icons_dark : styles.icons_light} width="18"
            height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" aria-labelledby="facebook-promitia"
            role="img">
            <title id="facebook-promitia">Follow us on Facebook</title>
            <g id="facebook-promitia_layer">
                <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2
                3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
            </g>
        </svg>
    )
}

export default FacebookIcon