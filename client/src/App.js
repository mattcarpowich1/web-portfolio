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

  scrollTo () {
    const top = this.projects.offsetTop
    scroll.scrollTo(top)
  }

  render () {
    return (
      <div>
        <header>
          <nav>
            <a href='https://www.linkedin.com/in/mattcarpowich/'>
              <img src='./linkedin.svg' />
            </a>
            <a href='https://github.com/mattcarpowich1'>
              <img src='./github.svg' />
            </a>
            <a href='https://twitter.com/mattcarpowich'>
              <img src='./twitter.svg' />
            </a>
          </nav>
          <h1>
            Matt
          </h1>
          <p className='ingra'>
            Full Stack Web Developer living in Oakland, CA. Passionate about building websites and web applications.
          </p>
          <button className='ingra' onClick={this.scrollTo}>VIEW MY WORK</button>
        </header>
        <main>
          <section className='ingra'>
            <h2>About Me</h2>
            <img src='./me.jpg' alt='me' />
            <p>
              My name is Matt Carpowich. I was born and raised in San Diego, but I now call the bay my home. I graduated from UC Berkeley in 2016 with a degree in Cognitive Science. In 2018 I graduated from a Full Stack Coding Bootcamp. I love building things for the web - landing pages, UI/UX, backend API's, etc. My main language is JavaScript, but I also use Golang and sometimes Python. I'm always open to new projects, so feel free to reach out!
            </p>
          </section>
          <section className='ingra' ref={node => {this.projects = node}}>
            <h2>My Work</h2>
            <div className='projects'>
              <div className='project'>
                <img src='./battleship.png' alt='battleship' />
                <div className='project-info'>
                  <h3>REACT BATTLESHIP</h3>
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
                  <h3>CUE</h3>
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
                  <h3>AMPHIBIAN</h3>
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
