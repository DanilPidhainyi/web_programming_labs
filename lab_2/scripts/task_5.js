
const get_loc_tex = item => {
    if (localStorage.getItem(item.toString()) === null) {
        item.html('Це друга лабораторна')
    } else {
        item.html(localStorage.getItem(item.toString()))
    }

}

const clean_text = item => {
    localStorage.removeItem(item.toString())
    get_loc_tex(item)
}


const save_edit = item => {
    /**
     * @item -> its elem with text (example h1)
     * this function created to operate the button
     */

    let new_text = $('#text_edit').val()
    item.html(new_text)

    localStorage.setItem(item.toString(), new_text)

    // todo колір на довільний
    function rand() {
        return Math.floor(Math.random() * 256);
    }
    let parent_item = item.parent(".bloc")[0]
    parent_item.style.backgroundColor =
        "rgb(" + rand() + "," + rand() + "," + rand() + ")"


    // todo кнопка для очищення локального середовища
    item.append(
        "<button onclick='clean_text($(`.bloc__1 h1`))'>Очистити</button>"
    )
}

const edit_text = item => {
    /**
     * @item -> its elem with text (example h1)
     * this function add textarea and button
     * instead of the contents of the block
     * */

    item.html("" +
        `<textarea id='text_edit'>${item.text()}</textarea>` +
        "<button onclick='save_edit($(`.bloc__1 h1`))'>змінити</buttonsave_edit>" +
        "")
}
$(() => {
    //5. Напишіть скрипт редагування вмісту (текст і HTML) номерних блоків (1..6):
    // а) необхідні елементи форми появляються у відповідних номерних блоках
    // внаслідок подвійного кліку на текстовому посиланні одразу після відповідного
    // текстового посилання;
    // б) у текстове поле підставляється весь вміст номерного блока (текст і HTML);
    // в) після текстового поля розміщується кнопка, внаслідок натискання на яку
    // змінений вміст зберігається в локальному сховищі і заміщує початковий вміст
    // номерного блока, при цьому фоновий колір блока міняється на довільний;
    // г) під кожним новим вмістом редагованих номерних блоків розміщується
    // кнопка, внаслідок натискання на яку новий вміст видаляється із локального
    // сховища броузера і в номерний блок підставляється початковий вміст
    // відповідного номерного блоку без перезавантаження документа.

    //ondblclick

    get_loc_tex($('.bloc__1 h1'))

})

// todo включить блок 3