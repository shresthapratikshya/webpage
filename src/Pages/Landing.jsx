import React from 'react'
import '../css/landing.scss';
import { FaRunning } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdPhotoCamera, MdOutlineBusinessCenter } from 'react-icons/md';
import { TbCurrencyCent } from 'react-icons/tb';

const Landing = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1>skilled</h1>
                <button className='navbar__button--gradient'>Get Started</button>
            </nav>

            <main className='content'>
                <div className="frontpage">
                    <div className="frontpage__text">
                        <h1>Maximize skill,<br /> minimize budget</h1>
                        <p>Our modern courses across a range of in-demand skills will
                            give you the knowledge you need to live the life you want.
                        </p>
                        <button className='frontpage__text--gradientbutton'>Get Started</button>
                    </div>
                    <div className='frontpage__image'>
                        <img src='Potrait.jpg' alt='Potrait'></img>
                        <div className='frontpage__image--members'>
                            <p>Members</p>
                            <b>29K</b>
                        </div>
                        <div className='frontpage__image--courses'>
                            <p>Course Hours</p>
                            <b>1,415</b>
                        </div>
                    </div>
                </div>

                <section className='course__section'>
                    <div className='course__section--gradient'>
                        <h1>Check out our most popular courses</h1>
                    </div>

                    <article className='course__section--article'>
                        <div className='icon'>
                            <FaRunning size={22} />
                        </div>
                        <div >
                            <h2>Animation</h2>
                            <p>Learn the latest animation technique to create stunning motion design and captivate your audience.</p>
                            <b>Get Started</b>
                        </div>
                    </article>
                    <article className='course__section--article'>
                        <div className='icon'>
                            <AiOutlineAntDesign size={30} />
                        </div>
                        <div>
                            <h2>Design</h2>
                            <p>Create beautiful, usable interfaces to help shape the future of how the web looks</p>
                            <b>Get Started</b>
                        </div>
                    </article>
                    <article className='course__section--article'>
                        <div className='icon'>
                            <MdPhotoCamera size={30} />
                        </div>
                        <div>
                            <h2>Photography</h2>
                            <p>Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
                            <b>Get Started</b>
                        </div>
                    </article>
                    <article className='course__section--article'>
                        <div className='icon'>
                            <TbCurrencyCent size={30} />
                        </div>
                        <div>
                            <h2>Crypto</h2>
                            <p>All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
                            <b>Get Started</b>
                        </div>
                    </article>
                    <article className='course__section--article'>
                        <div className='icon'>
                            <MdOutlineBusinessCenter size={30} />
                        </div>
                        <div>
                            <h2>Business</h2>
                            <p>A step-by-step playbooks to help you start, scale, and sustain your business without outside investment.</p>
                            <b>Get Started</b>
                        </div>
                    </article>
                </section>
            </main>

            <footer className='footer'>
                <h1>skilled</h1>
                <button className='footer__button--gradient'>Get Started</button>
            </footer>
        </div >
    )
}

export default Landing
