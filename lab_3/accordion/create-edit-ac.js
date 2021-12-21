
const renewal = () => {
    $.get(
        '/get_data',
        data => {
            data = JSON.parse(data)
            let blocs = data.data.map((item, i) => {
                console.log(item.input.toString());
                return `<div class="faq-item" id="item_${i}">
                <input class="faq-input" type="checkbox" id="faq_${i}">
                <label class="faq-title" for="faq_${i}">
                    <input class="input" type="text" id="inp_${i}" size="40" value="${item.input.toString()}">
                    <button class="faq-del" onclick="dell_section('item_${i}')"> - </button>
                </label>
                <div class="faq-text">
                    <p><textarea class="textarea" id="tex_${i}">
                        ${item.textarea}
                    </textarea></p>
                </div>
            </div>`
            })

            document.getElementById("faq-ac-it").innerHTML = ""
            $('.faq-ac-it').append(blocs.join(''))
        }
    )
}

const add_section = () => {
    fetch(
        '/push_data',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {"data": [...get_data(), {input: 'new Section', textarea: 'Якийсь текст ...'}]})
        }).then(_ => renewal())
}

const dell_section = (id) => {
    $("#" + id).remove()
    fetch(
        '/push_data',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {"data": get_data()})
        }).then(_ => renewal())
}

renewal()