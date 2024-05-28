import { useForm, useController } from "react-hook-form"
import Select from "react-select";
import { catSizes, catBrands } from "../../../shared/catalogs/catalogs";

const ProductFormLayout = () => {

    const { register, formState: { errors }, watch, handleSubmit, control } = useForm();
    const { field: { value: langValue, onChange: langOnChange, ...restLangField } } = useController({ name: 'size', control, rules: { required: true } });
    const { field: { value: langValue2, onChange: langOnChange2, ...restLangField2 } } = useController({ name: 'brand', control, rules: { required: true } });

    const onSubmit = (data) => {
        console.log("form submit: ", data, catSizes);
    }

    return (
        <>
            <div className="mt-20 pt-8 pb-4 lg:px-10 flex justify-center items-center">
                <div className="w-[90%] xl:w-[700px] h-auto bg-white rounded-md">
                    <h2 className="font-bold text-2xl py-4 px-8 text-baby-black">Nuevo producto</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4">
                        <div className="mb-4 flex flex-col">
                            <label className="mb-2 text-baby-black" htmlFor="nameItem">Producto:</label>
                            <input type="text" name="nameItem" id="nameItem" className="py-3 p-5 rounded-md  bg-zinc-50 outline-indigo-400" placeholder="Ej. T-Shirt manga corta" 
                            {...register("name", { required: true, minLength: 2,maxLength: 40 })}/>
                            {errors.name?.type === "required" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * El nombre es requerido
                                </small>
                            }
                            {errors.name?.type === "minLength" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * El mínimo de caractéres es 2
                                </small>
                            }
                            {errors.name?.type === "maxLength" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * El máximo de caractéres es 40 ({watch("name").length})
                                </small>
                            }
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="mb-2 text-baby-black" htmlFor="descriptionItem">Descripción:</label>
                            <input type="text" name="descriptionItem" id="descriptionItem" className="py-3 p-5 rounded-md  bg-zinc-50 outline-indigo-400" placeholder="Ej. Estampado de Guns And Rosses" 
                            {...register("description")}/>
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="mb-2 text-baby-black" htmlFor="sizeItem">Talla:</label>
                            <Select
                            placeholder="Seleccione una talla"
                            options={catSizes}
                            value={langValue ? catSizes.find(x => x.value === langValue) : langValue}
                            onChange={option => langOnChange(option ? option.value : option)}
                            {...restLangField}
                            />
                            {errors.size?.type === "required" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * La talla es requerida
                                </small>
                            }
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="mb-2 text-baby-black" htmlFor="sizeItem">Marca:</label>
                            <Select
                            placeholder="Seleccione una marca"
                            options={catBrands}
                            value={langValue2 ? catBrands.find(x => x.value === langValue2) : langValue2}
                            onChange={option => langOnChange2(option ? option.value : option)}
                            {...restLangField2}
                            />
                            {errors.size?.type === "required" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * La marca es requerida
                                </small>
                            }
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="priceItem" className="mb-2 text-baby-black">Precio: </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500">$</span>
                                </div>
                                <input type="text" name="price" id="price" className="w-full py-3 p-5 pl-7 rounded-md  bg-zinc-50 outline-indigo-400" 
                                placeholder="0.00" {...register("price", { required: true })}
                                />
                            </div>
                            {errors.price?.type === "required" &&
                                <small className="text-sm mt-2 text-red-400" >
                                    * El precio es requerido
                                </small>
                            }
                        </div>
                        <hr />
                        <div className="mb-4 flex flex-col">
                            <button type="submit" className="mt-10 py-3 bg-primary-black text-white w-full rounded-md font-bold hover:bg-[#172023] active:scale-105">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductFormLayout