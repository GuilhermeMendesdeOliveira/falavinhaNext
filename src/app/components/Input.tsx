export interface InputProps {
    titulo?: string
    type?: string
    id?: string
    placeHolder?: string
}

const Input = (props: InputProps) => {
    return (
        <div >
            <label htmlFor="firstName" className="block text-sm font-medium text-white text-start">
               {props.titulo}
            </label>
            <input
                type={props.type}
                id={props.id}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                placeholder={props.placeHolder}
            />
        </div >
    )
}

export default Input