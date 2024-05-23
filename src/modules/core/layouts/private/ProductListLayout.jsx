import { useCallback, useState } from "react";
import ImageViewer from 'react-simple-image-viewer';
const products = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];

const ProductListLayout = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

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
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-20 w-20">
                                                <img key={ item.id } className="h-20 w-20 rounded-md" src="https://i.pravatar.cc/150?img=1" alt="" onClick={ () => openImageViewer(item.id) } />
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
                        </tbody>
                    </table>
                    {/*settear y poner el path de la imagen*/}
                    {isViewerOpen && (
                        <ImageViewer
                        src={ ["https://i.pravatar.cc/150?img=1"] }
                        currentIndex={ 0 }
                        disableScroll={ false }
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.8)"
                        }}
                        closeOnClickOutside={ true }
                        onClose={ closeImageViewer }
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductListLayout