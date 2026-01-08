import styles from './index.module.css'
import { GitHub, Dribbble, Send } from 'react-feather'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { NavLink } from 'react-router-dom'

const AppFooter = () => {
  return (
    <footer className={`${styles.footer} section`}>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Brian Maier Jr.{' '}
          <NavLink to="/colophon">Colophon</NavLink>
        </p>
        <Tippy content="Whatever you do, work heartily, as for the Lord and not for men">
          <div className={styles.praiseGod}>Colossians 3:23</div>
        </Tippy>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Tippy content="Dribbble">
              <a
                href="https://dribbble.com/brianmaierjr"
                target="_blank"
                rel="me"
              >
                <span className="sr-only">Dribbble</span>
                <Dribbble className={styles.icon} size={20} />
              </a>
            </Tippy>
          </li>
          <li>
            <Tippy content="GitHub">
              <a
                href="https://github.com/brianmaierjr"
                target="_blank"
                rel="me"
              >
                <span className="sr-only">GitHub</span>
                <GitHub className={styles.icon} size={20} />
              </a>
            </Tippy>
          </li>
          <li>
            <Tippy content="Email">
              <a href="mailto:brianmaierjr@gmail.com" target="_blank">
                <span className="sr-only">Contact</span>
                <Send className={styles.icon} size={20} />
              </a>
            </Tippy>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default AppFooter
