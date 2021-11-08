import Navbar from '@components/navbar'
import Footer from '@components/footer'
const Noop = ({ children }) =>
    <>
        <Navbar />
        {children}
        <Footer />
    </>;
export default Noop