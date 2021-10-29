const setColor = color => {
    localStorage.setItem('color_bloc_2', color)
}

const getColor = () => {
    const color = localStorage.getItem('color_bloc_2')
    if (color === '0')
        return '#de831c'
    else
        return color
}


const changeColor = color => {
    $('.bloc__2')[0].style.backgroundColor = color
    setColor(color)
}

$(() => {
    // 4. Напишіть скрипт, який при настанні події blur змінює колір фону блоку «2» на
    // вказаний користувачем і зберігає відповідне значення кольору в локальному
    // сховищі броузера так, щоб при наступному відкриванні документа значення
    // кольору фону блоку «2» встановлювалось із збереженого значення в
    // локальному сховищі.

    let button = $('.bloc__2__b')
    button.focus()
    button.blur(() => {
        changeColor(getColor())
    })
})

