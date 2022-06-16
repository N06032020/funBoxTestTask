import styles from './Card.module.scss';

function Card() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cardsItems}>
          {/* First card */}
          <div className={styles.cardItem}>
            <div className={styles.cardItemTextContent}>
              <p className={styles.cardItemTextFirst}>Сказочное заморское яство</p>
              <h1 className={styles.cardItemTextSecond}>Нямушка</h1>
              <p className={styles.cardItemTextThird}>с фуа-гра</p>
              <p className={styles.cardItemTextFourth}>
                10 порций <br /> мышь в подарок
              </p>
            </div>
            <div className={styles.weightRound}>
              <span className={styles.weightRoundNumbers}>0,5</span>
              <span className={styles.weightRoundText}>кг</span>
            </div>
            <p className={styles.cardBottom}>
              Чего сидишь? Порадуй котэ, <span>купи.</span>
            </p>
          </div>

          {/* Second card */}
          <div className={styles.cardItem}>
            <div className={styles.cardItemTextContent}>
              <p className={styles.cardItemTextFirst}>Сказочное заморское яство</p>
              <h1 className={styles.cardItemTextSecond}>Нямушка</h1>
              <p className={styles.cardItemTextThird}>с рыбой</p>
              <p className={styles.cardItemTextFourth}>
                40 порций <br /> 2 мыши в подарок
              </p>
            </div>
            <div className={styles.weightRound}>
              <span className={styles.weightRoundNumbers}>2</span>
              <span className={styles.weightRoundText}>кг</span>
            </div>
            <p className={styles.cardBottom}>
              Чего сидишь? Порадуй котэ, <span>купи.</span>
            </p>
          </div>
          {/* Third card */}
          <div className={styles.cardItem}>
            <div className={styles.cardItemTextContent}>
              <p className={styles.cardItemTextFirst}>Сказочное заморское яство</p>
              <h1 className={styles.cardItemTextSecond}>Нямушка</h1>
              <p className={styles.cardItemTextThird}>с курой</p>
              <p className={styles.cardItemTextFourth}>
                100 порций
                <br />5 мышей в подарок
                <br /> заказчик доволен
              </p>
            </div>
            <div className={styles.weightRound}>
              <span className={styles.weightRoundNumbers}>5</span>
              <span className={styles.weightRoundText}>кг</span>
            </div>
            <p className={styles.cardBottom}>
              Чего сидишь? Порадуй котэ, <span>купи.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
