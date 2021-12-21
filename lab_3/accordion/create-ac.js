$.get(
    '/get_data',
    data => {
        data = JSON.parse(data)
        let blocs = data.data.map((item, i) => {
            return `<div class="faq-item">
                <input class="faq-input" type="checkbox" id="faq_${i}">
            <label class="faq-title" for="faq_${i}">
                ${item.input.toString()}
            </label>
            <div class="faq-text">
                <p>${item.textarea.toString()}</p>
            </div>
        </div>`
        })

        $('.bloc__3').append('<div class="faq" style="width: 100%">' +
            blocs.join('') +
            '</div>')
    })


