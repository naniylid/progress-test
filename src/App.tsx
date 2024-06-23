import React, { useState } from 'react';
import './styles/App.scss';

export const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const totalActions = 7;

  const updateProgress = () => {
    const newProgress = progress + 1;
    if (newProgress > totalActions) {
      setProgress(0); // Если прогресс больше максимального значения, сбрасываем его до 0
    } else {
      setProgress(newProgress);
    }
  };

  // Вычисление стиля для прогресс-бара
  const progressPercentage = (progress / totalActions) * 100;
  const circumference = 2 * Math.PI * 29.5;
  const offset = circumference - (circumference * progressPercentage) / 100;

  return (
    <div className='app'>
      <div className='progress-bar'>
        <div className='progress-bar__circle'>
          <svg viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='30' cy='30' r='29.5' stroke='white' strokeOpacity='0.5' />

            <circle
              cx='30'
              cy='30'
              r='29.5'
              stroke='white'
              strokeWidth='2'
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform='rotate(-90 30 30)'
            />

            <text x='30' y='34' className='progress-text' dominantBaseline='middle'>
              {progress}/{totalActions}
            </text>
          </svg>
        </div>
        <div className='progress-bar__content'>
          <div className='progress-bar__content--checklist'>
            <p>Чеклист</p>
          </div>
          <p className='progress-bar__content--counter'>
            Выполнено: {progress} из {totalActions} действий
          </p>
          <p className='progress-bar__content--next-task'>
            Следующее действие: Созвониться с клиентом до 23.05.24 12:00
          </p>
        </div>
        <div className='progress-bar__button'>
          <button onClick={updateProgress}>
            <a href='#'>Открыть чеклист</a>
          </button>
        </div>
      </div>
    </div>
  );
};
