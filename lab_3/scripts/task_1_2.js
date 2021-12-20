$(() => {

    //1. Поміняйте місцями контент блоків «х» та «у».
    const x = $(".bloc__1__x")
    const y = $(".bloc__6__y")
    const content_x = x.html();
    x.html(y.html())
    y.html(content_x)

    /*   2. Напишіть функцію, яка обчислює площу кола,
        беручи необхідні значення із відповідних змінних у
    скрипті, і виводить отриманий результат в кінці
    контенту в блоці «3».*/

    const square_circle = r => {
        /**
         * This function find area of a circle
         * @param r - it is radius circle
         * @return null
         */

        $(".bloc__3").append(
            "<div>" +
            "<br> Площа кола:" +
            `<br> ${Math.PI * r * r}` +
            " </div>")

        return null
    }

    square_circle(5);
})