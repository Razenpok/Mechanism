class Texture {
    source: HTMLImageElement;

    constructor(source: HTMLImageElement) {
        this.source = source;
    }

    static fromImage(url: string): Texture {
        const image = new Image();
        const texture = new Texture(image);
        image.src = url;
        return texture;
    }
}