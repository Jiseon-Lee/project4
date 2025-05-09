import React from "react";
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_top}>
                <Link to="/" className={styles.header_top_logo}>
                    <img src="/img/logo.gif" alt="Jeju Shilla" height="90" />
                </Link>
                <nav className={styles.header_top_utilNav}>
                    <Link to="/login">로그인</Link>
                    <Link to="/shillaRewards">신라리워즈 가입</Link>
                    <Link to="/book">예약확인</Link>
                    <Link to="/lang"><i className="bi bi-globe"></i> 한국어</Link>
                    <Link to="/membership">멤버십</Link>
                </nav>
            </div>
            <div className={styles.header_mainNav}>
                <nav className={styles.gnb}>
                    <div className={styles.navItem}>
                        <Link to="/">스페셜 오퍼</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">객실패키지</Link>
                                <Link to="/event">이벤트</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/rooms">객실</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">스텐다드</Link>
                                <Link to="/package">프리미어</Link>
                                <Link to="/package">스위트</Link>
                                <Link to="/package">객실 전체 보기</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/dining">다이닝</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">레스토랑</Link>
                                <Link to="/event">라운지 & 바</Link>
                                <Link to="/event">베이커리</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/activity">액티비티</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">글램핑 & 캠핑</Link>
                                <Link to="/event">레저 전문가 서비스</Link>
                                <Link to="/event">키즈 시설</Link>
                                <Link to="/event">피트니스</Link>
                                <Link to="/event">갤러리 투어</Link>
                                <Link to="/event">숨비정원</Link>
                                <Link to="/event">플레이 존</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/facility">부대시설</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">숨피 스파 존</Link>
                                <Link to="/event">카바나</Link>
                                <Link to="/event">스파</Link>
                                <Link to="/event">연회장</Link>
                                <Link to="/event">비즈니스 센터</Link>
                                <Link to="/event">아케이드</Link>
                                <Link to="/event">렌터카</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/facility">QnA</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/reservation">예약</Link>
                        <div className={styles.subMenu}>
                            <div className={styles.subMenu_Bg}></div>
                            <div className={styles.subMenu_inner}>
                                <Link to="/package">객실</Link>
                                <Link to="/event">다이닝</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header