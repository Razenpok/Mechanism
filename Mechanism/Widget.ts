﻿///<reference path="RenderObject.ts"/>
///<reference path="Animations/Animators.ts"/>
class Widget extends RenderObject {
    children: Widget[] = [];
    position = Vector2.zero;
    scale = Vector2.one;
    rotation = 0;
    pivot = Vector2.zero;
    size = new Vector2(100, 100);

    beforeRender(renderer: Renderer): void {
        renderer.save();
        const offset = this.position.subtract(this.pivot.multiply(new Vector2(this.width, this.height)));
        renderer.translate(offset.x, offset.y);
        renderer.rotate(this.rotation);
        renderer.scale(this.scale.x, this.scale.y);
    }

    afterRender(renderer: Renderer): void {
        renderer.restore();
    }

    get width(): number {
        return this.size.x;
    }

    get height(): number {
        return this.size.y;
    }

    addChild(widget: Widget): void {
        super.addChild(widget);
    }

    static positionAnimator = () => new Vector2Animator("position");
    static scaleAnimator = () => new Vector2Animator("scale");
    static pivotAnimator = () => new Vector2Animator("pivot");
    static sizeAnimator = () => new Vector2Animator("size");
    static rotationAnimator = () => new NumberAnimator("rotation");
}