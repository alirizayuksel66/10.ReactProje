import { useState } from "react"
import { createModal } from "../utils/modal"
import Header from "./components/header"

export default function LoginModal({ data, close }) {

    const [search, setSearch] = useState('')

    return (
        <div className="w-[500px]">
            <Header title="Giriş Yap"/>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <p>
                Aranan Kelime: {search}
            </p>
            <button onClick={() => {
                createModal('register', {
                    name: 'Ali Rıza',
                    surname: 'Yüksel',
                    setSearch
                })
            }}>Register Modalı Yükle</button><br/>
            <button onClick={close}>Kapat</button>
        </div>
    )
}