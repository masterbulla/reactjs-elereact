export default function effectAddition(effect, reaction, damage) {
    let output;

    if (effect === 'crimson' && reaction === 'Overloaded' ) {
        output = damage * 1.4;
    } else if (effect === 'tf' && (reaction === 'Overloaded' || reaction === 'Electro-Charged' || reaction === 'Superconduct')) {
        output = damage * 1.4;
    } else if (effect === 'venerer' && reaction === 'Swirl') {
        output = damage * 1.6;
    }

    return output;
}