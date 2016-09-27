class Vector2Mutator {
    private readonly origin: Vector2;

    constructor(vector: Vector2) {
        this.origin = vector;
    }

    add(value: Vector2| number): Vector2Mutator {
        this.apply(value, (lhs, rhs) => lhs + rhs);
        return this;
    }

    subtract(value: Vector2): Vector2Mutator {
        this.apply(value, (lhs, rhs) => lhs - rhs);
        return this;
    }

    multiply(value: Vector2 | number): Vector2Mutator {
        this.apply(value, (lhs, rhs) => lhs * rhs);
        return this;
    }

    divide(value: Vector2 | number): Vector2Mutator {
        this.apply(value, (lhs, rhs) => lhs / rhs);
        return this;
    }

    private apply(value: Vector2 | number, fn: (lhs: number, rhs: number) => number): void {
        if (value instanceof Vector2) {
            this.origin.x = fn(this.origin.x, value.x);
            this.origin.y = fn(this.origin.y, value.y);
        } else {
            this.origin.x = fn(this.origin.x, value);
            this.origin.y = fn(this.origin.y, value);
        }
    }
}