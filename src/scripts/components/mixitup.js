import mixitup from 'mixitup';

var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});

export {mixer};