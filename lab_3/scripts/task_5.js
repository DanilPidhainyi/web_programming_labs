
const get_loc_tex = (item) => {
    let def = {
        [$('.bloc__1 h1').attr('class')] : 'Це друга лабораторна',
        [$('.bloc__6 .p2').attr('class')] : 'Підберіть безкоштовний хостінг'
    }

    if (localStorage.getItem(item.attr('class')) === null) {
        item.html(def[item.attr('class')])
    } else {
        item.html(localStorage.getItem(item.attr('class')))
    }

}

const clean_text = item => {
    localStorage.removeItem(item.attr('class'))
    get_loc_tex(item)
    return null
}


const save_edit = item => {
    /**
     * @item -> its elem with text (example h1)
     * this function created to operate the button
     */

    let new_text = $('#text_edit').val()
    item.html(new_text)

    localStorage.setItem(item.attr('class'), new_text)

    // колір на довільний
    function rand() {
        return Math.floor(Math.random() * 256);
    }
    let parent_item = item.parent(".bloc")[0]
    parent_item.style.backgroundColor =
        "rgb(" + rand() + "," + rand() + "," + rand() + ")"


    // кнопка для очищення локального середовища
    if (item.html().search('but_clear') === -1) {
        item.append(
            "<button id='but_clear'>Очистити</button>"
        )
        $('#but_clear').click(() => {clean_text(item)})
    }
    return null
}

const edit_text = item => {
    /**
     * @item -> its elem with text (example h1)
     * this function add textarea and button
     * instead of the contents of the block
     * */
    item.html(
        `<textarea id='text_edit'>${item.html()}</textarea>` +
        `<button id='but_change'>змінити</buttonsave_edit>`
    )
    //document.getElementById('#but_change').onclick = save_edit(item)
    $('#but_change').click(() => {save_edit(item)})
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
    get_loc_tex($('.bloc__6 .p2'))
})

// todo включить блок 3