import { RiHome5Line, RiPieChartLine, RiWallet2Line, RiCurrencyLine } from '@remixicon/react'
import { Icon } from '@tremor/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBard = () => {
    return (
        <>
            <p className="text-center font-mono text-sm text-slate-500 uppercase mt-2">
                Productos registrados
            </p>
            <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-12 mt-4 mb-4">
                <Link to={''}>
                    <Icon icon={RiHome5Line} variant="light" tooltip="Home" size="md" color="red" />
                </Link>
                <Link to={''}>
                    <Icon icon={RiPieChartLine} variant="light" tooltip="Gastos" size="md" color="yellow" />
                </Link>
                <Link to={''}>
                    <Icon icon={RiWallet2Line} variant="light" tooltip="Metas" size="md" color="orange" />
                </Link>
                <Link to={'/'}>
                    <Icon icon={RiCurrencyLine} variant="light" tooltip="Presupuesto" size="md" color="green" />
                </Link>
            
            </div>
        </>
    )
}
