import Chat from "../component/Chat"
import SideBar from "../component/Sidebar"
export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <SideBar />
                <Chat/>
            </div>
        </div>
    )
}