import './css/Footer.css';

const Footer = () => {
  return (
    <section className="all-footer">

<div className='footer'>
      <div className="statements">
        <ul>
            <li><span>Fashion</span> oriented and <span>curious</span> about results</li>
            <li>Strictly offfering a <span>russian</span> style of service</li>
            <li><span>Best products and equipments</span> in market</li>
            <li>Have a collective experience of <span>over 3 years</span></li>
        </ul>
      </div>
      <div className="links">
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Get in touch</a></li>
        </ul>
      </div>
      <div className="queries">
        <ul>
            <li>Phone n<u>o</u> : <span>0790331108</span></li>
            <li>Email : <span>mungaim638@gmail.com</span></li>
        </ul>
      </div>
     </div>
    <div className="copyright">
        <h2><small>&copy; It's a flex</small></h2>
    </div>

    </section>
  )
}

export default Footer
