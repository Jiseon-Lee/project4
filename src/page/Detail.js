import React from 'react'

import Header from '../components/header/Header'
import SideNav from '../components/sub/SideNav'
import { useParams } from 'react-router-dom'
import RoomPackageDetail from '../components/sub/RoomPackageDetail';

function Detail({type}) {
    const { id } = useParams();

    const renderDetail = () => {
        switch (type) {
            case "event":
                return <EventDetail id={id} />;
            case "package":
                return <RoomPackageDetail id={id} />;
            case "room":
                return <RoomDetail id={id} />;
            default:
                return <p>존재하지 않는 유형입니다.</p>;
        }
    };

    return (
        <>
            <Header/>
            <SideNav/>
            {
                // detail 페이지
            }
        </>
    )
}

export default Detail
