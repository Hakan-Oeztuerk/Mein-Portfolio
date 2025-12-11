export default function compose(...functions) {
    return function (Component) {
        return functions.reduceRight(
            (wrapped, fn) => fn(wrapped),
            Component
        );
    };
}
