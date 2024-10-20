"use client"

import { useState } from "react"
import Botao from "../components/Botao"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import Formulario from "../components/Formulario"
import Header from "../components/Header"
import Input from "../components/Input"

const Calculadora = () => {

    const [result, setResult] = useState(0)

    const servicos = ['BPO Financeiro', 'BPO Contábil', 'BPO Tributário']
    const bancos = [1, 2, 3, 4, 5, 6]
    const conciliacao = ['Sim', 'Não']
    const lancamentos = [100, 1000, 2000, 3000, 4000, 5000]
    const cliente = ['Sim', 'Não' ]
    const faturamento = ["Até R$ 100.000,00", "Entre R$ 100.000,00 e R$ 500.000,00", "Entre R$ 500.000,00 e R$ 1.000.000,00", "Mais de R$ 1.000.000,00"]

    const teste = (value: any) => {
        console.log(value)
    }

    return (
        <div className="flex flex-col justify-start h-screen">
            <Header titulo="Calculadora BPO" tituloBtn="Voltar Página Inicial" href="/" />
            <div className="flex-grow text-center text-white">
                <h2>Preencha Todos os Campos para Realizar a Simulação.</h2>
                <Formulario>
                    <Input titulo="Nome Executivo" placeHolder="Digite seu Nome"/>
                    <Input titulo="Email Empresa" placeHolder="Digite seu Melhor Email"/>
                    <Input titulo="Nome Empresa" placeHolder="Nome da Empresa"/>
                </Formulario>
                <div className="flex flex-col px-4 items-start">
                    <h2>Selecione os valores aproximados</h2>
                    <Formulario>
                        <Dropdown label="Serviços" options={servicos} onSelect={teste} />
                        <Dropdown label="Quantidade de Bancos" options={bancos} onSelect={teste} />
                        <Dropdown label="Tem Conciliação" options={conciliacao} onSelect={teste} />
                        <Dropdown label="Quantidade de Lançamentos" options={lancamentos} onSelect={teste} />
                        <Dropdown label="É Cliente Falavinha" options={cliente}onSelect={teste} />
                        <Dropdown label="Faturamento" options={faturamento} onSelect={teste}/>
                    </Formulario>
                </div>
                <Botao type={'submit'} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded" titulo="Calcular"/>
            </div>
            <Footer />
        </div>
    )
}

export default Calculadora