
import parallax from 'parallax';
import forms from 'forms';
import contacsMap from 'map';
import tags from 'tags';
import menu from 'menu';
import accardeon from 'accardeon';
import careerForm from 'career-form';
import slider from 'slider';
import share from 'share';
import search from 'search';
import header from 'header';
import timeline from 'timeline';

let app = {
    init() {
        parallax.init();
        forms.init();
        contacsMap.init();
        accardeon.init();
        slider.init();
        menu.init();
        careerForm.init();
        tags.init();
        share.init();
        search.init();
        header.init();
        timeline.init();
    }
};
app.init();
