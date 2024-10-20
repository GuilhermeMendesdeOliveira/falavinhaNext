export interface BotaoProps {
    type?: any
    className?: string
    titulo: string
}

const Botao = (props: BotaoProps) => {
    return(
        <button type={props.type} className={props.className}>{props.titulo}</button>
    )
}

export default Botao