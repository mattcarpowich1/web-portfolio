import React, { Component } from 'react'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

class App extends Component {
  constructor () {
    super()
    this.state = {
      sidebar: false,
      products: false
    }

    this.toggleProducts = this.toggleProducts.bind(this)
    this.toggleSideBar = this.toggleSideBar.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
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

  toggleSideBar () {
    const { sidebar } = this.state
    this.setState({
      sidebar: !sidebar,
      products: false
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

  render () {
    return (
      <div className='container'>
        <nav className={`${this.state.sidebar ? 'invert' : ''}`}>
          <img src={`./matt${this.state.sidebar ? '-dark' : ''}.svg`} />
          <img src={`${this.state.sidebar ? './black-x.svg' : '/light-burger.svg'}`}
            onClick={this.toggleSideBar} /> 
        </nav>
        <div className={`nav-links ${this.state.sidebar ? '' : 'hide'}`}>
          <ul className='inner-content'>
            <li>Products
              <img src='./down-carrot.svg'
                className={`${this.state.products ? 'flip' : ''}`}
                onClick={this.toggleProducts} />
            </li>
            <li className={`products ${this.state.products ? '' : 'hide'}`}>
              <ul className='products-list'>
                <li>
                  <div>
                    <i className="fas fa-desktop"></i>
                  </div>
                  <div>
                    <div>
                      <h4>Website Services</h4>
                      <p>
                        Build a custom website or landing page. 
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div>
                    <div>
                      <h4>Application Engineering</h4>
                      <p>
                        Design custom application architecture for your needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="fas fa-cloud"></i>
                  </div>
                  <div>
                    <div>
                      <h4>Cloud Infrastructure</h4>
                      <p>
                        Provision, manage, and secure your resources on AWS.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>Solutions</li>
            <li>Resources</li>
          </ul>
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
        </div>
        <header>
          <h1>
            Hi.
          </h1>
          <p>
            I am a Full Stack Web Developer living in Oakland, CA. 
          </p>
          <button className='ingra' onClick={this.scrollTo}>LEARN MORE</button>
        </header>
        <main>
          <section ref={node => {this.about = node}}>
            <h2>About Me</h2>
            <img src='./me.jpg' alt='me' />
            <p>
              I graduated from UC Berkeley with a B.A. in Coginitive Science. After college I completed a coding bootcamp at UC Berkeley Extension to receive a certification in Full Stack Web Development. I can build clean, professional-looking websites from scratch using a wide range of web technologies. I'm an expert in JavaScript and love using React (which is how I built this website). If you need a web-based app, no problem - I can quickly initialize an application stack running Node, Go, or Python. I can easily integrate a PostgreSQL or MongoDB instance to store your application data. I can also manage deployment to the cloud, where I can assure industry-grade security and monitoring of your virtual assets. I'm currently on the lookout for new projects, so feel free to reach out! 
            </p>
          </section>
          <section ref={node => {this.projects = node}}>
            <h2>My Work</h2>
            <div className='projects'>
              <div className='project'>
                <img src='./battleship.png' alt='battleship' />
                <div className='project-info'>
                  <h3 className='ingra'>REACT BATTLESHIP</h3>
                  <p>2 Player battleship implementation in React.</p>
                  <p>
                    <a className='ingra' 
                      href='https://react-battleship-mc.herokuapp.com'>
                      LINK
                    </a>
                  </p>
                  <p>
                    <a className='ingra' 
                      href='https://github.com/mattcarpowich1/battleship_react'>
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
                      href='https://github.com/cuelabs/cueapp'>
                      GITHUB REPO
                    </a>
                  </p>
                </div>
              </div>
              <div className='project'>
                <img src='./amphibian.png' alt='cue' />
                <div className='project-info'>
                  <h3 className='ingra'>AMPHIBIAN</h3>
                  <p>
                    Example Website. 
                  </p>
                  <p>
                    <a className='ingra' 
                      href='https://mattcarpowich1.github.io/website-example/'>
                      LINK
                    </a>
                  </p>
                  <p>
                    <a className='ingra' 
                      href='https://github.com/mattcarpowich1/website-example'>
                      GITHUB REPO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default App
