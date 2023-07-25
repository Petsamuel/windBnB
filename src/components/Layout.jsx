import { Fragment } from 'react';
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>

    )
}
