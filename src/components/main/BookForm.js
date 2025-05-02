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
        <>
            <form className={styles.book_form}>
                <dl>
                    <dt>
                        <label className={styles.form_label}>체크인</label>
                    </dt>
                    <dd>
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
                            className="form-control"
                            dateFormat="yyyy-MM-dd"
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
                    <dt>
                        <label className={styles.form_label}>체크아웃</label>
                    </dt>
                    <dd>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate || today}
                            monthsShown={2}
                            placeholderText="날짜 선택"
                            className="form-control"
                            dateFormat="yyyy-MM-dd"
                        />
                    </dd>
                </dl>
            </form>
        </>
    )
}

export default BookForm
