import Header from "./components/header";

export default function RegisterModal({ data, close }) {
    return (
        <div className="w-[700px]">
            <Header title="Kayıt Ol"/>
            <div>
                {data.name}<br/>
                {data.surname}<br/>
                <button onClick={() => {
                    data.setSearch('yeni search kelimesi')
                    close()
                }}>
                    Search Güncelle
                </button>
            </div>
        </div>
    )
}