import { NavBar } from "../../components/atoms/navbar"
import { Description } from "../../components/atoms/description"
import './styles.css'

export const Home = () => {
    return(
        <>
            <NavBar />

            <div className="container-home">
            <div className="grid">
                <div><Description /></div>
                <div>2</div>
            </div>
        </div>
        </>
    )
}