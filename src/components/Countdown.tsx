import { useContext, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const {
    minutes,
    seconds,
    isActive,
    startCountdown,
    resetCountdown,
    hasFinished
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCycleBtn = (
    <button
      type="button"
      className={styles.countdownButton}
      onClick={startCountdown}
    >
      Iniciar um ciclo
    </button>
  );

  const abandomCycleBtn = (
    <button
      type="button"
      className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
      onClick={resetCountdown}
    >
      Abadonar ciclo
    </button>
  );

  const finishedCycleBtn = (
    <button
      className={styles.countdownButton}
      disabled
    >
      Ciclo encerrado <FaCheckCircle color="var(--green)" style={{ marginLeft: 8 }} />
    </button>
  );

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {
        hasFinished
          ? finishedCycleBtn
          : isActive
            ? abandomCycleBtn
            : startCycleBtn
      }
    </div>
  );
}