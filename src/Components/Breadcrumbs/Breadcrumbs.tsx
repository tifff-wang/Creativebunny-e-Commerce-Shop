import { useLocation, Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../Store/Category/categorySelector'
import './Breadcrumbs.styles.scss'

const Breadcrumbs = () => {
    const location = useLocation()
    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')
    const productId = crumbs[crumbs.length - 1]
    const selectedProduct = useSelector(selectProductById(productId))

    if (location.pathname === '/') {
        return null
    }

    return (
        <div className='breadcrumbs-container'>
            {crumbs.length === 0 ? (
                ''
            ) : (
                <div>
                    {' '}
                    <Link className="crumb-link" to="/">Home</Link>
                    <span className='home-slash'>/</span>
                </div>
            )}
            {crumbs.map((crumb, index) => {
                const decodedCrumb = decodeURIComponent(crumb)
                const currentLink = `/${crumbs.slice(0, index + 1).join('/')}`
                const isLastCrumb = index === crumbs.length - 1

                return (
                    <nav key={crumb} className="crumb">
                        {isLastCrumb ? (
                            <span className='last-crumb'>
                                {selectedProduct?.name.toLowerCase() ||
                                    decodedCrumb}
                            </span>
                        ) : (
                            <Link className="crumb-link" to={currentLink}>
                                {decodedCrumb}
                            </Link>
                        )}
                        {isLastCrumb ? null : ' / '}
                    </nav>
                )
            })}
        </div>
    )
}

export default Breadcrumbs
