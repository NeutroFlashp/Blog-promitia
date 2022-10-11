import type { NextPage } from 'next'
import styles from "../../styles/Header.module.css";
import Logo from './logo-header';
import LinkHeader from './linkHeader';

const links = 
      [
        {
            "label" : "ABOUT US",
            "href" : "#"
        },
        {
            "label" : "SERVICES",
            "href" : "#"
        },
        {
            "label" : "OUR WORK",
            "href" : "#"
        },
        {
            "label" : "TECHNOLOGY",
            "href" : "#"
        },
        {
            "label" : "BLOG",
            "href" : "#"
        },
        {
            "label" : "CONTACT",
            "href" : "#"
        },
        {
            "label" : "+51 981 485 983",
            "href" : "#"
        }
    ]
 ;


const Header: NextPage = () =>{
    return(
        <header className = {styles.header}>
            <div className={styles.header__navbox}>
                <div className={styles.header__logo}>
                    <Logo></Logo>
                </div>
                <div className={styles.link_container}>
                    {links.map((props)=>{
                        return (<LinkHeader href={props.href} label={props.label} />)
                    })}
                </div>
            </div>  
        </header>
    )

}

export default Header 
