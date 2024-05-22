const products = [{},{},{},{},{},{}];

const ProductListLayout = () => {
    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10">
                <h2 className="font-bold text-2xl text-baby-black">Productos [80]</h2>

                <div className="w-full mt-5 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Producto
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Sku
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Estatus
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Información
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map(item => 
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-20 w-20">
                                                <img className="h-20 w-20 rounded-md" src="https://i.pravatar.cc/150?img=1" alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    T-shirt
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Playera corta gris con estampado
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-baby-black">34564d</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className="text-baby-black font-medium">$150.00</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`order open`}>Disponible</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-gray">
                                        <div className="text-sm">
                                            Marca: <span className="text-baby-black font-medium">Zara</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Talla: <span className="text-baby-black font-medium">M</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                    </td>
                                </tr>
                            )}
                           


                            {/* <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                Jane Cooper
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                jane.cooper@example.com
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div className="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    jane.cooper@example.com
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                </td>
                            </tr>



                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                Jane Cooper
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                jane.cooper@example.com
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div className="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    jane.cooper@example.com
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                </td>
                            </tr>



                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                Jane Cooper
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                jane.cooper@example.com
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div className="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    jane.cooper@example.com
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                </td>
                            </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductListLayout