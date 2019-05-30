export default class PDFTron {
    init = (source,element) => {
        new window.PDFTron.WebViewer({
            path: '/WebViewer/lib',
            l: 'demo:jungdw0624@gmail.com:743d76bd01653c7ffee243cafee578476784d37419f5a2ec4a',
            initialDoc: source,
        }, element);
    }

}