export interface HeaderProps{
    titulo?: string
    href?: string
    tituloBtn: string
}

const Header = (props: HeaderProps) => {
    return(
        <div className="flex justify-between my-3 h-14 items-center px-6 py-2  text-white">
            <h1>Logo Falavinha</h1>
            <div>
                <h1>{props.titulo}</h1>
            </div>
            <a href={props.href}><button className="justify-center items-center rounded-md text-sm p-2 bg-red-600">{props.tituloBtn}</button></a>
        </div>
    )
}

export default Header