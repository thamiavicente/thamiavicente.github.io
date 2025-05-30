import Image from "next/image";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['main']}>
      <Image className={styles['main__logo-img']} src="/assets/logo-grafism.png" role="presentation" alt="" width={380} height={380}/>
      <svg width="472" height="472" viewBox="0 0 472 472">
        <defs>
          <path
            id="circlePath"
            d="M 236,236
              m -180,0
              a 180,180 0 1,1 360,0
              a 180,180 0 1,1 -360,0"
          />
        </defs>

        <g className={styles['main__logo-text']} >
          <text>
            <textPath href="#circlePath" startOffset="0" textLength="1130">
              &#8226; tav code and art &#8226; thamiris andrade vicente code and art &nbsp;
              </textPath>
            </text>
        </g>
      </svg>
    </main>
  );
};