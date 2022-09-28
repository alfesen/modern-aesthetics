import s from './Footer.module.scss'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <section className={`${s.footer} w-100`}>
      <Container className='p-5'>
        <div className='row'>
          <div className={`d-flex flex-column text-center mb-4 text-md-start col-md-5 ml-5 ${s['footer__div']}`}>
            <h4>Pages</h4>
            <Link to='/home'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/recommendations'>Recommendations</Link>
            <Link to='/info'>Info</Link>
          </div>
          <div className={`d-flex flex-column text-center text-md-start mb-4  col-md-4 ${s['footer__div']}`}>
            <h4>Other projects</h4>
            <a
              href='https://plaguedev.pl/'
              target='_blank'
              rel='noopener noreferrer'>
              Old little portfolio
            </a>
            <a href='https://alfesen.github.io/pdp-philosophybay/'>
              PhilosophyBay
            </a>
            <a
              href='https://github.com/alfesen'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
          <div className={`col-md-3 text-center text-md-start mb-4  d-flex flex-column ${s['footer__div']}`}>
            <h4>Administration</h4>
            <div className='mb-3'>
              <Link to='/admin'>Panel</Link>
            </div>
            <h4>Contact</h4>
            <a href='tel:+48788136459'>Click to call me</a>
            <a href='mailto:alexander.fesenko@plaguedev.pl'>Contact me by email</a>
          </div>
        </div>
      </Container>
      <hr></hr>
      <footer>
        <p>
          &copy;{' '}
          <a className={s['footer__plaguedev-link']} href='http://plaguedev.pl'>
            Plaguedev{' '}
          </a>
          |{' ' + date}
        </p>
      </footer>
    </section>
  )
}

export default Footer
