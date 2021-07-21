import Inputmask from 'inputmask';
import Autosize from 'autosize';

let forms = {

    init() {
        let selector = document.querySelectorAll('.js-mask__tel');
        Inputmask({
            mask: '+7 999 999 99 99',
            showMaskOnHover: false,
        }).mask(selector);

        const textareaWrap = document.querySelectorAll('.textarea__wrap');


        textareaWrap.forEach((elem) => {
            const textarea = elem.querySelector('.textarea');
            const textareaSymbols = elem.querySelector('.textarea-symbols__number');

            Autosize(textarea);
            textarea.addEventListener('keyup', () => {
                const textareaValue = textarea.value.length;
                textareaSymbols.innerHTML = 160 - textareaValue;
            })
        });


    },

};

export default forms;