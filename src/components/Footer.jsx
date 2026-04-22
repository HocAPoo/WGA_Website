import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="./WGA/HX_Homepage/WGA_trans.png" alt="WGA" />
      </div>
      <p className="footer__text">
        Address: 1100 NE Campus Pkwy, Seattle, WA 98105 | Questions? Email:{' '}
        <a href="mailto:wgauw@uw.edu">wgauw@uw.edu</a> | 2026
      </p>
    </footer>
  )
}
