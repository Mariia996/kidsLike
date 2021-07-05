import { useState } from 'react';

import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import styles from './CheckboxToggle.module.scss';

function CheckboxToggle({ className, onClick, isCompleted }) {
  const id = v4();

  const [checked, setChecked] = useState(isCompleted);
  const handleChange = () => {
    setChecked(!checked);
  }

    return (
        <div className={styles.switch}>
          <div className={styles.switchControl}>
          <input id={id} className={`${styles.switchToggle} ${className}`} checked={checked} type="checkbox"
            onClick={onClick} onChange={handleChange} />
            <label aria-hidden="true" className={styles.switchTrack} htmlFor={id}>
                <span className={styles.switchIcon}></span>
            </label>
            <div aria-hidden="true" className={styles.switchMarker}></div>
          </div>
        </div>
    )
};

export default CheckboxToggle;


CheckboxToggle.defaultProps = {
  className: '',
  isCompleted: false,
  onClick: () => { }
}


CheckboxToggle.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired
}

