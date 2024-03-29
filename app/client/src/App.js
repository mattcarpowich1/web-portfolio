import React, { Component } from 'react'
import SubMenuItem from './SubMenuItem'
import {
  Events,
  animateScroll as scroll,
  scrollSpy
} from 'react-scroll'

class App extends Component {
  constructor () {
    super()
    this.state = {
      sidebar: false,
      products: false,
      links: false,
      fresh: true,
      burgerHover: false
    }

    this.toggleBurgerHover = this.toggleBurgerHover.bind(this)
    this.toggleProducts = this.toggleProducts.bind(this)
    this.toggleSideBar = this.toggleSideBar.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
    this.goTop = this.goTop.bind(this)
  }

  componentDidMount () {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  toggleBurgerHover (status) {
    const { burgerHover } = this.state
    this.setState({
      burgerHover: status
    })
  }

  toggleSideBar () {
    const { sidebar } = this.state
    setTimeout(() => {
      this.setState({
        links: !sidebar
      })
    }, 400)
    this.setState({
      sidebar: !sidebar,
      products: false,
      fresh: false
    })
  }

  toggleProducts () {
    const { products } = this.state
    this.setState({
      products: !products
    })
  }

  scrollTo () {
    const top = this.about.offsetTop
    scroll.scrollTo(top)
  }

  goTop () {
    scroll.scrollTo(0)
    this.setState({
      sidebar: false,
      products: false
    })
  }

  render () {
    const links = (
      <div className='nav-links-links'>
        <a href='https://www.linkedin.com/in/mattcarpowich/'>
          <img src='./linkedin.svg' />
        </a>
        <a href='https://github.com/mattcarpowich1'>
          <img src='./github.svg' />
        </a>
        <a href='https://twitter.com/mattcarpowich'>
          <img src='./twitter_1.svg' />
        </a>
      </div>
    )

    return (
      <div className='container'>
        {
          this.state.sidebar && <div className='white' />
        }
        <nav className={`${this.state.sidebar ? 'invert' : 'normal'}`}>
          <img src='./matt.svg'
            className={`z-top ${this.state.sidebar ? 'hide' : ''}`}
            onClick={this.goTop} />
          <img src='./matt-dark.svg'
            className={`z-top ${this.state.sidebar ? '' : 'hide'}`}
            onClick={this.goTop} />
          {
            this.state.links && this.state.sidebar ? links : null
          }
          <div className={`burger-x ${this.state.sidebar ? 'x-active' : ''}`}
            onClick={this.toggleSideBar}
            onMouseOver={() => this.toggleBurgerHover(true)}
            onMouseLeave={() => this.toggleBurgerHover(false)}>
            <div />
            <div />
            <div />
          </div>
        </nav>
        <div className={`nav-links ${this.state.sidebar ? 'normal' : 'hide'} ${this.state.fresh ? 'fresh' : ''}`}>
          <ul className='inner-content'>
            <li>Products
              <img src='./down-carrot.svg'
                className={`${this.state.products ? 'flip' : ''}`}
                onClick={this.toggleProducts} />
            </li>
            <li className={`products ${this.state.products ? '' : 'hide'}`}>
              <ul className='products-list'>
                <SubMenuItem
                  id={0}
                  icon={`desktop`}
                  title={`Website Services`}>
                  Build a custom website or landing page.
                </SubMenuItem>
                <SubMenuItem
                  id={1}
                  icon={`cogs`}
                  title={`Application Engineering`}>
                  Design custom application architecture for your needs.
                </SubMenuItem>
                <SubMenuItem
                  id={2}
                  icon={`cloud`}
                  title={`Cloud Infrastructure`}>
                  Provision, manage, and secure your resources on AWS.
                </SubMenuItem>
              </ul>
            </li>
            <li>Solutions</li>
            <li>Resources</li>
          </ul>
        </div>
        <header>
          <h1>
            Hi.
          </h1>
          <p>
            I am a Full Stack Web Developer living in San Diego, CA.
          </p>
          <button className='ingra' onClick={this.scrollTo}>LEARN MORE</button>
        </header>
        <main>
          <section ref={node => { this.about = node }}>
            <h2>About Matt</h2>
            <p>
              I graduated from UC Berkeley with a B.A. in Coginitive Science. I received a certification in Full Stack Web Development from UC Berkeley Extension. I can build clean, professional-looking websites from scratch using a wide range of web technologies. I'm an expert in JavaScript and love using React (which is how I built this website). I'm passionate about UI development. I also love music, surfing, and running. I currently work as a Web Developer at LUXVT.
            </p>
          </section>
          <section className='photomatt'>
          </section>
          <section ref={node => { this.projects = node }}>
            <h2>My Work</h2>
            <div className='projects'>
              <div className='project'>
                <img src='./battleship.png' alt='battleship' />
                <div className='project-info'>
                  <h3 className='ingra'>REACT BATTLESHIP</h3>
                  <p>2 Player battleship implementation in React.</p>
                  <p>
                    <a className='ingra'
                      href='https://react-battleship-mc.herokuapp.com'
                      target='_blank'
                      rel='noopener noreferrer'>
                      LINK
                    </a>
                  </p>
                  <p>
                    <a className='ingra'
                      href='https://github.com/mattcarpowich1/battleship_react'
                      target='_blank'
                      rel='noopener noreferrer'>
                      GITHUB REPO
                    </a>
                  </p>
                </div>
              </div>
              <div className='project'>
                <img src='./cue.png' alt='cue' />
                <div className='project-info'>
                  <h3 className='ingra'>CUE</h3>
                  <p>
                    A jukebox-like music app that allows users to create collaborative playlists on the fly. Front-end built in React/Redux. Back-end built with Golang and PostgreSQL. A work in progress.
                  </p>
                  <p>
                    <a className='ingra'
                      href='https://github.com/cuelabs/cueapp'
                      target='_blank'
                      rel='noopener noreferrer'>
                      GITHUB REPO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className='copyright'>
            &copy; Matt Carpowich {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    )
  }
}

export default App
