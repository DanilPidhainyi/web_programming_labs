$(() => {
    /* 3. Напишіть скрипт, який визначає кількість
    максимальних чисел із 10 значень, беручи необхідні
    значення із відповідної форми в блоці «3», а
    отриманий результат виводить за допомогою
    діалогового вікна і зберігає в куках, причому:
    а) при оновленні документа в броузері користувачу за допомогою діалогового
    вікна виводиться інформація, збережена в куках, із питанням про необхідність
    видалити дані із куків, і не виводиться згадана вище форма;
    б) при підтвердженні питання відповідні куки видаляються, і документ
    оновлюється з початковим станом із наявною формою для введення даних;
    в) при відмові виводиться наступне діалогове вікно із інформуванням
    користувача про наявність куків і необхідність перезавантаження документа. */


    const num_of_num = () => {
        /**
         * this function add form
         * @return null
         * */

        // add form
        $(".bloc__3").append(
            "<p><form class=\"main_form\">" +
            "    <input class=\"main_form__input_num\" name=\"input_num\" type=\"текс\" placeholder=" +
            "\"уведіть 10 чисел через пробіл, enter\" >\n" +
            "</form></p>")

        let form = $(".main_form")[0]
        form.addEventListener('submit', e => {
            e.preventDefault() // щоб форма не одправилась
            // обробка
            let num = num_largest(form.elements.input_num.value);
            if (Boolean(num)) {
                document.cookie = "Кількість найбільших чисел: " + num
                alert(document.cookie)
            }
        })


        return null
    }


    const num_largest = str => {
        /**
         * this function finds the number of largest numbers
         * @str -> str with num
         * @return int
         * */

        let nums = str.trim().split(' ')
        let res;
        if (nums.length === 10) {
            try {
                res = nums.map(parseFloat)
                    .filter(Boolean)
                    .sort((a, b) => a > b)
                let MAX = res[res.length - 1]
                res = res.filter(item => item === MAX)
                    .length
            } catch (err) {
                alert("Помилка даних: " + str)
            }
        } else {
            alert("не 10")
        }
        return res | null
    }

    // work with user
    if (document.cookie.length === 0) {
        num_of_num()
    } else if (document.cookie === '-1') {
        num_of_num()
    } else {
        if (confirm(document.cookie + "\n Видалити дані?")) {
            document.cookie = -1
            num_of_num()
        } else {
            if (confirm("Наявні куки перезавантажити сторінку?")) {
                location.reload();
            }

        }
    }

})