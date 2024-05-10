const AccountLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h1 className="font-bold text-2xl text-primary-black">Mi cuenta</h1>

                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center justify-center">
                    <div>Mis pedidos</div>
                    <div>Mis devoluciones</div>
                    <div>Configuración1</div>
                </section>
            </div>
        </>
    )
}

export default AccountLayout