const LoginLayout = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[90%] xl:w-[700px] p-10 h-[400px]">
                    <h2 className="font-bold text-2xl text-primary-black text-center mb-2">Iniciar sesión</h2>
                    <hr />
                    <div className="flex justify-center mt-10">
                        <form action="">
                            <div className="mb-4 flex flex-col">
                                <label className="mb-2" htmlFor="emailLogin">Usuario:</label>
                                <input type="text" name="" id="emailLogin" className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400" placeholder="Ej. email@gmail.com" />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label className="mb-2" htmlFor="passLogin">Password:</label>
                                <input type="password" name="" id="passLogin" className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400" placeholder="Ej. *******" />
                            </div>

                            <div class="flex justify-end mt-3 mb-4">
                                <a href="#" className="text-blue-700 text-sm">¿Olvidaste tu password?</a>
                            </div>

                            <button type="submit" className="mt-10 py-3 bg-primary-black text-white w-full rounded-md font-bold">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout