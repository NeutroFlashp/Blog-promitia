import {NextPage} from "next";
import styles from "../../styles/Footer.module.css";
import {SocialMediaIconsProps} from "../../interfaces/footer.interface";


const LinkedinIcon: NextPage<SocialMediaIconsProps> = (props: SocialMediaIconsProps) => {
    return (
        <svg className={props.theme==="dark" ? styles.icons_dark : styles.icons_light} width="18" height="18"
             xmlns="http://www.w3.org/2000/svg"  aria-labelledby="linkedin-promitia" role="img">
            <title id="linkedIn-promitia">Follow us on Linkedin</title>
            <g id="linkedIn-promitia_layer">
                <path d="M30.07-10.9v-.076a.92.92 0 01-.05.077h.05zM3.977 17.558H.12V5.95h3.857zM2.047 4.364h-.024C.728
                4.364-.11 3.474-.11 2.36-.11 1.22.755.353 2.075.353s2.132.866 2.158 2.005c0 1.113-.84 2.004-2.184
                2.004zM17.89 17.558h-3.857v-6.21c0-1.56-.558-2.626-1.954-2.626-1.067
                0-1.7.718-1.98 1.412-.103.247-.128.593-.128.94v6.484H6.114s.05-10.52 0-11.608H9.97v1.643c.514-.79
                1.43-1.917 3.48-1.917 2.537 0 4.44 1.66 4.44 5.225v6.66z"></path>
            </g>
        </svg>
    )
}

export default LinkedinIcon