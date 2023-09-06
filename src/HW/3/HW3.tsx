
import React, { ChangeEvent, useState } from 'react';





export const HW3 = () => {
  // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
  // что приложение начнет гореть красным и ругаться 😡
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере

  


  const [currentText, setCurrentText] = useState('');
  console.log(currentText)
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  // const handleChange = (event:ChangeEventHandler<HTMLInputElement>) => {
  //   setCurrentText(event.currentTarget.value);
  // };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { // Используем тип ChangeEvent
    setCurrentText(event.currentTarget.value);
  };



  const handleSave = () => {


   
            setTexts([currentText,...texts ]); // Добавляем текущий текст в список
            setCurrentText(''); // Обнуляем текущий текст
        

    // ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
    // А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
  };

  return (
    <div id={'hw03'}>

{currentText ? (
  <h1 id={'hw03-text'}>{currentText}</h1>
) : (
  <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1>
)}

<input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

<button id={'hw03-button'} onClick={handleSave}>
  Сохранить
</button>

<h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

<ol id={'hw03-tasks'}>
  {texts.map((el, index) => {
    return (
      <li key={index} id={`hw03-task-${index}`}>
        {el}
      </li>
    );
  })}
</ol>
  </div> 
  );
};




    
