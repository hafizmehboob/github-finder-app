
function Footer() {
  const footerYear = new Date().getFullYear();  
    return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center text-white">
        <p>Copyright &copy; {footerYear}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer