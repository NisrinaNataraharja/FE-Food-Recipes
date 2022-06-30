import Link from 'next/link';
import styles from './footer.module.css';


function Footer() {
  return (
    <footer className="bg-warning text-color-blue">
      <div className={styles.top}>
        <h1 className="display-5 mb-4">Eat, Cook, Repeat</h1>
        <p className="mx-3 text-center">
          Share your best recipe by uploading here !
        </p>
      </div>
      <div className={styles.bottom}>
        <ul className="m-0 p-0">
          <li>
            <Link className="color-blue" href="/#">
              Product
            </Link>
          </li>
          <li>
            <Link className="color-blue" href="/#">
              Company
            </Link>
          </li>
          <li>
            <Link className="color-blue" href="/#">
              Learn More
            </Link>
          </li>
          <li>
            <Link className="color-blue" href="/#">
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
