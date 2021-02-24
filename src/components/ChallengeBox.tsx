import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  const emptyContent = (
    <div className={styles.challengeNotActive}>
      <strong>
        Finalize um ciclo para receber um desafio.
      </strong>
      <p>
        <img src="icons/level-up.svg" alt="Level up" />
        Avance de level completando desafios.
      </p>
    </div>
  );

  let activeContent;

  if (activeChallenge) {
    activeContent = (
      <div className={styles.challengeActive}>
        <header>Ganhe {activeChallenge.amount} xp</header>

        <main>
          <img src={`icons/${activeChallenge.type}.svg`} alt="Corpo do Desafio" />
          <strong>Novo desafio!</strong>
          <p>{activeChallenge.description}</p>
        </main>

        <footer>
          <button
            type="button"
            className={styles.challengeFailedBtn}
            onClick={resetChallenge}
          >
            Falhei
          </button>
          <button
            type="button"
            className={styles.challengeSuccededBtn}
          >
            Completei
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge
          ? activeContent
          : emptyContent
      }
    </div>
  );
}