import Navbar from '@components/navbar'
const Noop = ({ children }) =>
    <>
        <Navbar />
        {children}
        <>Footer</>
    </>;
export default Noop