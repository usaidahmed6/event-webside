import React, { useEffect, useState } from "react";
import './home.css'
import { getDocs, db, eventRef, auth } from '../firebase'
import Conatiner from "../component/Container";
import { Card, Avatar } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

function Home() {
    const [color, setColor] = useState('red')
    const [eve, setEve] = useState([])
    const navigate = useNavigate()

    useEffect(async () => {
        if (auth.currentUser == null) {
            navigate('/login')
        }
        getAllEvent()

    }, [])

    const getAllEvent = async () => {
        const querySnapshot = await getDocs(eventRef);
        let events = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            events.push({ id: doc.id, ...doc.data() })
        });
        setEve(events)
    }


    console.log('events==>', eve)

    return (
        <Conatiner>
            <div className="container_event">

                {
                    eve.map((data, index) => {
                        return (
                            <Card className="styleCard">
                                {/* style={{ width: 300, margin: 12 }}
                                cover={
                                  
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,

                                    <EllipsisOutlined key="ellipsis" />,
                                ]} */}

                                <Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={data.eventName}

                                />
                                <br />

                                <img
                                    alt="example"
                                    src={data.eventImg}
                                    className={'event_img'}
                                />
                                <br />
                                <br />
                                <b className="time">  Timing: {data.eventTime}</b>
                                <b className="time">Date:{data.eventDate}</b>
                                {/* <Meta   description={data.eventTime} className='font-size' /> */}

                            </Card>
                        )
                    })
                }
            </div>

        </Conatiner>
    )
}

export default Home