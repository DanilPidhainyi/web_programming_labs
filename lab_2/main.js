$(() => {

    //1. Поміняйте місцями контент блоків «х» та «у».
    const x = $(".bloc__1__x")
    const y = $(".bloc__6__y")
    const content_x = x.html();
    x.html(y.html())
    y.html(content_x)


})