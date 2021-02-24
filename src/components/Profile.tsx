import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wallrony.png" alt="Foto de perfil" />
      <div>
        <strong>Wallisson Rony</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem do nível." />
          Level {level}
        </p>
      </div>
    </div>
  );
}