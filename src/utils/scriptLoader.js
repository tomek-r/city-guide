export function scriptLoader(src) {
    return new Promise((resolve, reject) => {
        const script = window.document.createElement('script');

        script.addEventListener('load', () => {
            resolve();
        }, false);

        script.addEventListener('error', () => {
            reject();
        }, false);

        script.src = src;

        window.document.body.appendChild(script);
    });
};