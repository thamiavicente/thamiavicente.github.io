import Image from "next/image";
import styles from './page.module.scss';

export default function About() {
    return (
        <section className={styles['about']}>
            <h1 className={styles['about__title']}>Thamiris Andrade Vicente</h1>
            <div className={styles['about__img-container']}>
            <Image className={styles['about__img']} src="/assets/profile-photo.jpeg" alt="Portrait of Thamiris smiling against a neutral background." width={576} height={1024}></Image>
            </div>
            <h2 className={styles['about__job']}>Front end<br/>Developer</h2>
            <p className={styles['about__description']}>
                I'm a brazillian front-end developer based in Veldhoven. Over the past 4 years, I've gained solid experience with Vue.js and CMS platforms such as Adobe Experience Manager, developing not only strong programming skills but also knowledge in team management and accessibility. Additionally, my background in design has given me a strong foundation in user experience and business thinking. My key soft skills include commitment, fast learning ability, and adaptability.
            </p>
            <ul className={styles['about__skills-list']}>
                <li className={styles['about__skills-item']}>VueJS</li>
                <li className={styles['about__skills-item']}>AEM</li>
                <li className={styles['about__skills-item']}>A11y</li>
            </ul>
        </section>
    )
}