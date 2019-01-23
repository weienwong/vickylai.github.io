// Some of this great code blatantly stolen from https://jonathan-harrell.com/live-theming-with-css-variables/

const setValue = (property, value) => {
    document.documentElement.style.setProperty(`--${property}`, value);
};

const setValueFromLocalStorage = property => {
    let value = localStorage.getItem(property);
    setValue(property, value);
};

const setTheme = options => {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        setValue(property, value);
        localStorage.setItem(property, value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setValueFromLocalStorage('background');
    setValueFromLocalStorage('body-text');
    setValueFromLocalStorage('highlight-background');
    setValueFromLocalStorage('links-hover');
    setValueFromLocalStorage('accent');
    setValueFromLocalStorage('img-opacity');
    setValueFromLocalStorage('day-button');
    setValueFromLocalStorage('night-button');


    const dayButton = document.getElementById('day');
    dayButton.addEventListener('click', () => {
        setTheme({
            'background': '#fff',
            'body-text': '#555',
            'highlight-background': '#f5f6f7',
            'links-hover': '#555',
            'accent': '#000',
            'img-opacity': '1',
            'day-button': 'none',
            'night-button': 'inline',
        });
    });

    const nightButton = document.getElementById('night');
    nightButton.addEventListener('click', () => {
        setTheme({
            'background': '#232323',
            'body-text': '#ababab',
            'highlight-background': '#343434',
            'links-hover': '#eee',
            'accent': '#ececec',
            'img-opacity': '0.8',
            'day-button': 'inline',
            'night-button': 'none',
        });
    });
});