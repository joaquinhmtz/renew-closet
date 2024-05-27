import { useForm, Controller } from "react-hook-form"
import Select from "react-select";
import { catSizes } from "../../../shared/catalogs/catalogs";

const ProductFormLayout = () => {

    const { register, formState: { errors }, watch, handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log("form submit: ", data, catSizes);
    }

    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10 flex justify-center items-center">
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
                            <input type="text" name="descriptionItem" id="descriptionItem" className="py-3 p-5 rounded-md  bg-zinc-50 outline-indigo-400" placeholder="Ej. Estampado de Guns And Ross" 
                            {...register("description")}/>
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label className="mb-2 text-baby-black" htmlFor="sizeItem">Talla:</label>
                            <Select placeholder="Selecciona una talla" options={catSizes} {...register("size")} />
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