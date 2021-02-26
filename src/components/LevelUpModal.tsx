import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpModalProps {
  handleCloseModal: () => void;
}

export function LevelUpModal({ handleCloseModal }: LevelUpModalProps) {

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.modalOverlay} role="document">
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={handleCloseModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}