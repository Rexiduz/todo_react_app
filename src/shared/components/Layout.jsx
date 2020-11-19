import React, { useContext } from 'react'
import { ShopContext } from '../../hook/shop-context'
import { AuthContext } from '../../hook/auth-context'
import { Link, useHistory } from 'react-router-dom'
import { isEmptyObject } from '../../utils'
import imgOrder from '../../images/ordericon.png'
import imgPos from '../../images/posicon.png'
const Layout = ({ children, match, location }) => {
    let h = useHistory();
    const { me, isAdmin, handleLogout, loading: meLoading } = useContext(AuthContext)
    const { shop, gotoMeQueue, gotoBookingQueue, gotoShopQueue, gotoQueueManage, gotoStock, gotoPos, gotoOrder, gotoShopHome, gotoShopMePofile } = useContext(ShopContext)
    const navbarCollapse = React.useRef(null)
    let adminLink = null, btn = null, userLink = null;

    function collapse() {
        $(navbarCollapse.current).collapse('hide')
    }

    let isAdmingLoggedIn = isAdmin();
    let isLoggedIn = !isEmptyObject(me);

    if (isAdmingLoggedIn) {
        btn = renderButtonByRoute();

        adminLink = <>
            <li className="nav-item dropdown">
                <a className="nav-link " href="#" id="navbar_booking_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    รายการการจอง
                </a>
                <div className="dropdown-menu " aria-labelledby="navbar_booking_dropdown">
                    <Link onClick={e => { collapse(), gotoShopQueue() }} to='#' className="dropdown-item">ตารางการจอง</Link>

                    <Link onClick={e => { collapse(), gotoQueueManage() }} to='#' className="dropdown-item">รายการจอง</Link>
                </div>
            </li>
            <li className="nav-item  dropdown">
                <a className="nav-link " href="#" id="navbar_sale_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ระบบขาย
                </a>

                <div className="dropdown-menu " aria-labelledby="navbar_booking_dropdown">
                    <a onClick={e => { collapse(), gotoPos() }} className="dropdown-item" href="#">หน้าขาย </a>
                    <a onClick={e => { collapse(), gotoStock() }} className="dropdown-item" href="#">สินค้า </a>
                    <a onClick={e => { collapse(), gotoOrder() }} className="dropdown-item" href="#">รายการขาย </a>

                </div>

            </li>
        </>
    } else {
        userLink = <>
            <li className="nav-item ">
                <a onClick={e => { collapse(), gotoShopQueue() }} className="nav-link" href="#">ตารางการจอง <span className="sr-only"></span></a>
            </li>
            {!isEmptyObject(me) && <>
                <li className="nav-item ">
                    <a onClick={e => { collapse(), gotoBookingQueue() }} className="nav-link" href="#">รายการจอง <span className="sr-only"></span></a>
                </li>

                <li className="nav-item ">
                    <a onClick={e => { collapse(), gotoMeQueue() }} className="nav-link" href="#">รายการจองของฉัน <span className="sr-only"></span></a>
                </li>
            </>}


        </>
    }

    const handleClick = (isPosPage) => {
        if (isPosPage) {
            return gotoPos();
        };
        return gotoOrder();
    }

    function renderButtonByRoute() {
        let imgUrl = null
        let pos = false;

        if (String(location.pathname).match(/\/pos/)) {
            imgUrl = imgOrder
        } else {
            imgUrl = imgPos
            pos = true
        }

        return <a onClick={e => handleClick(pos)} href="#" className='btn-navagation-pos' >
            <img className='img-fluid' src={imgUrl} alt="" />
        </a>
    }

    function linkToHome(e) {
        e.preventDefault();
        if (!isAdmingLoggedIn) {
            collapse();
            gotoShopHome();
        }

    }



    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark color-navbar-custome fixed-top" >

                <Link className="navbar-brand" to={'#'} onClick={linkToHome} >{shop.userCompany?.companyName}</Link>

                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#smart_q_navbar" aria-controls="smart_q_navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div ref={navbarCollapse} className="navbar-collapse collapse " id="smart_q_navbar" >

                    <ul className="navbar-nav ml-auto ">
                        {adminLink}
                        {userLink}
                        {isLoggedIn && <li className="nav-item ">
                            <a className="nav-link " href="#" id="navbar_user_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>{' '} {me.name}
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar_user_dropdown">


                                {isAdmingLoggedIn && <Link onClick={e => { collapse(), gotoShopMePofile() }} to='#' className="dropdown-item">โปรไฟล์</Link>}

                                <Link onClick={handleLogout} to='#' className="dropdown-item">ออกจากระบบ</Link>
                            </div>

                        </li>

                        }

                    </ul>
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search" />
                    </form> */}
                </div>


            </nav>

            <div className="container">
                {children}

            </div>



            <footer className={""}>
            </footer>

            {btn}
        </>
    )
}


export default React.memo(Layout);