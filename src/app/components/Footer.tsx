import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <div className="flex px-4 py-1 h-10 justify-start items-center">
            <p className="w-full justify-center items-center text-center text-white">Grupo Falavinha Next &copy; {currentYear} | Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer