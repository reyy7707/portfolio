import { FC, ReactNode } from "react";
import { Footer } from "../../footer";
// import { Header } from "../../header";

interface ILayout {
    children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
    {/* <Header/> */}
     <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout