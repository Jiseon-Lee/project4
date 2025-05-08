import React from 'react'
import { Nav } from 'react-bootstrap'

import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <div className={styles.top_wrap}>
                    <img src="/img/logo.gif" height="90" className={styles.logo} alt="shilla jeju logo"/>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/login">로그인</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/shillaRewards">신라리워즈 가입</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/book">예약확인</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">
                                <i className="bi bi-globe"></i> 한국어
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">멤버십</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <Nav className="justify-content-center" activeKey="/home" style={{backgroundColor:"#81725F"}}>
                <Nav.Item>
                    <Nav.Link href="/">스페셜 오퍼</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="link-1">객실</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="link-2">다이닝</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="disabled">액티비티</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="disabled">부대시설</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="disabled">예약</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        
    )
}

export default Header
