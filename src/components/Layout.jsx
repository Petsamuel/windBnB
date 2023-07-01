import { Fragment } from 'react';
import { Header } from './Header'

export const Layout = ({ Children }) => {
    return (
        <Fragment>
            <Header />
            {Children}
        </Fragment>

    )
}
