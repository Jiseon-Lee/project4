import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './BookForm.module.scss'

function BookForm() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);

    const getNights = () => {
        if (!startDate || !endDate) return null;
        const timeDiff = endDate.getTime() - startDate.getTime();
        const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return nights;
    };

    return (
        <div className={styles.book_form}>
            <div className={styles.book_form_date}>
                <dl>
                    <dt className={styles.book_form_date_title}>
                        <label>체크인</label>
                    </dt>
                    <dd className={styles.book_form_date_cont}>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                if (endDate && date > endDate) setEndDate(null);
                            }}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={today}
                            monthsShown={2}
                            placeholderText="날짜 선택"
                            className={styles.book_form_date_cont_input}
                            dateFormat="yyyy.MM.dd"
                        />
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <div className={styles.form_label}><img src="img/icon/ico_night.png" /></div>
                    </dt>
                    <dd>
                        {((startDate===null||endDate===null) ? 1 : getNights())}박
                    </dd>
                </dl>
                <dl>
                    <dt className={styles.book_form_date_title}>
                        <label className={styles.form_label}>체크아웃</label>
                    </dt>
                    <dd className={styles.book_form_date_cont}>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate || today}
                            monthsShown={2}
                            placeholderText="날짜 선택"
                            className={styles.book_form_date_cont_input}
                            dateFormat="yyyy.MM.dd"
                        />
                    </dd>
                </dl>
            </div>
            <div className={styles.book_form_room}>
                <dl>
                    <dt>객실</dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>성인</dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>어린이<i class="bi bi-info-circle"></i></dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>유아<i class="bi bi-info-circle"></i></dt>
                    <dd></dd>
                </dl>
            </div>
            <div className={styles.book_form_btn}>
                <button type="button" class="btn btn-primary btn-lg">예약하기</button>
            </div>
        </div>
    )
}

export default BookForm
