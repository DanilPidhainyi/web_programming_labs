const get_data = () => $('.faq-item').map((i, item) => {
        let res = {}
        res.input = item.getElementsByClassName("input").item(0).value
        res.textarea = item.getElementsByClassName("textarea").item(0).innerText.replace(/ +/g, ' ').trim()
        return res
    })



const save = () => {

    fetch(
        '/push_data',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: get_data().toArray()})
        }).then(_ => _)
}