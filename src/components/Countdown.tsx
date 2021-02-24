import { useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimer: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimer);

    setIsActive(false);
    setTime(.1 * 60);
  }

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