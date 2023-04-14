import React from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { filterContactsData } from 'app/slices/tableSlice';

import './find-form.scss';

// /. imports

const FindForm: React.FC = () => {
    const {
        filteredContactsData,
        isContactsDataLoading,
        fetchContactsDataError
    } = useAppSelector(state => state.tableSlice);

    const dispatch = useAppDispatch();

    // /. hooks

    const isControlsAvailable =
        !isContactsDataLoading &&
        !fetchContactsDataError &&
        filteredContactsData.length > 0;

    // /. variables

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(filterContactsData({ enteredValue: e.target.value.trim() }));
    };

    // /. functions

    return (
        <form
            className="find-form"
            action="#"
            onSubmit={e => e.preventDefault()}
        >
            <input
                className="find-form__input"
                type="text"
                placeholder="Поиск"
                disabled={!isControlsAvailable}
                onChange={e => onInputChange(e)}
            />
            <button
                className="find-form__button"
                type="submit"
                aria-label="find contact"
                disabled={!isControlsAvailable}
            >
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.7812 13.8438L12.6562 10.7188C12.5 10.5938 12.3125 10.5 12.125 10.5H11.625C12.4688 9.40625 13 8.03125 13 6.5C13 2.9375 10.0625 0 6.5 0C2.90625 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.5 13C8 13 9.375 12.5 10.5 11.625V12.1562C10.5 12.3438 10.5625 12.5312 10.7188 12.6875L13.8125 15.7812C14.125 16.0938 14.5938 16.0938 14.875 15.7812L15.75 14.9062C16.0625 14.625 16.0625 14.1562 15.7812 13.8438ZM6.5 10.5C4.28125 10.5 2.5 8.71875 2.5 6.5C2.5 4.3125 4.28125 2.5 6.5 2.5C8.6875 2.5 10.5 4.3125 10.5 6.5C10.5 8.71875 8.6875 10.5 6.5 10.5Z"
                        fill="#323F47"
                    />
                </svg>
            </button>
        </form>
    );
};

export default FindForm;
