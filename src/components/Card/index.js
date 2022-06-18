import styles from './Card.module.scss';
import React, { useEffect, useState } from 'react';

function Card() {
  // Я понимаю, что это костыли.
  // Я понимаю, что нужно сделать что-то с состояниями(?) или с отслеживанием состояния у каждой карточки(?), чтоб соседние карточки не принимали смену цвета при нажатии на одну из карточек но на данный момент мне не хватает знаний или понимания как это реализовать.
  const [isActive, setActive] = useState(true);
  const [isActiveFish, setActiveFish] = useState(true);
  const [isActiveChicken, setActiveChicken] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClassFish = () => {
    setActiveFish(!isActiveFish);
  };
  const toggleClassChicken = () => {
    setActiveChicken(!isActiveChicken);
  };

  const text = 'Чего сидишь? Порадуй котэ,';
  const textSecond = 'купи.';
  const [buttonText, setButtonText] = useState(text);
  const [buttonTextSecond, setButtonTextSecond] = useState(textSecond);

  const textFish = 'Чего сидишь? Порадуй котэ,';
  const textSecondFish = 'купи.';
  const [buttonTextFish, setButtonTextFish] = useState(textFish);
  const [buttonTextSecondFish, setButtonTextSecondFish] = useState(textSecondFish);

  const textChicken = 'Чего сидишь? Порадуй котэ,';
  const textSecondChicken = 'купи.';
  const [buttonTextChicken, setButtonTextChicken] = useState(textChicken);
  const [buttonTextSecondChicken, setButtonTextSecondChicken] = useState(textSecondChicken);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cardsItems}>
          {/* First card */}
          <div className={styles.cardWrapper}>
            <p
              className={styles.cardBottom}
              onClick={() =>
                setButtonText('Печень утки разварная с артишоками.', setButtonTextSecond(''))
              }>
              {buttonText} <span>{buttonTextSecond}</span>
            </p>
            <div
              className={isActive ? styles.cardItem : styles.cardItemActive}
              onClick={toggleClass}>
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
            </div>
          </div>

          {/* Second card */}
          <div className={styles.cardWrapper}>
            <p
              className={styles.cardBottom}
              onClick={() =>
                setButtonTextFish(
                  'Головы щучьи с чесноком да свежайшая сёмгушка.',
                  setButtonTextSecondFish(''),
                )
              }>
              {buttonTextFish} <span>{buttonTextSecondFish}</span>
            </p>
            <div
              className={isActiveFish ? styles.cardItem : styles.cardItemActive}
              onClick={toggleClassFish}>
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
            </div>
          </div>
          {/* Third card */}
          <div className={styles.cardWrapper}>
            <p
              className={styles.cardBottom}
              onClick={() =>
                setButtonTextChicken(
                  'Филе из цыплят с трюфелями в бульоне.',
                  setButtonTextSecondChicken(''),
                )
              }>
              {buttonTextChicken} <span>{buttonTextSecondChicken}</span>
            </p>
            <div
              className={isActiveChicken ? styles.cardItem : styles.cardItemActive}
              onClick={toggleClassChicken}>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
