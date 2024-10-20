// components/Form.js
import React from 'react';

export interface formularioProps {
    children: React.ReactNode
    btn?: React.ReactNode
}


const Formulario = (props: formularioProps) => {

    return (
        <form className="flex flex-col w-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {props.children}
                {/* <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white text-start">
                        Nome Consultor
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Digite seu primeiro nome"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white text-start">
                        Nome da Empresa
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Digite o nome da empresa"
                    />
                </div> */}
                {/* <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Digite sua senha"
                    />
                </div> */}
            </div>
            {/* <div>
                {props.btn}
                <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
                    Enviar
                </button>
            </div> */}
        </form>
    );
};

export default Formulario;
