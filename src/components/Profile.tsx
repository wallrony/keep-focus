import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wallrony.png" alt="Foto de perfil" />
      <div>
        <strong>Wallisson Rony</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem do nível." />
          Level 1
        </p>
      </div>
    </div>
  );
}