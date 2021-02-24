export default function calculator(lvl, em, reaction) {
    let output;
    switch(reaction) {
        case 'Overloaded':
            output = (1+((60/9) * (em/(1401+em)))) *
                ((-0.0000027646 * Math.pow(lvl, 5)) +
                (0.0005189440 * Math.pow(lvl, 4)) - 
                (0.0314790536 * Math.pow(lvl, 3)) +
                (0.9268181504 * Math.pow(lvl, 2)) -
                4.3991155718 * (lvl) + 37.4371542286);
            break;
        case 'Electro-Charged':
            output = (1+((60/9) * (em/(1401+em)))) *
                ((-0.0000014798 * Math.pow(lvl, 5)) +
                (0.0002746679 * Math.pow(lvl, 4)) - 
                (0.0162160738 * Math.pow(lvl, 3)) +
                (0.4742385201 * Math.pow(lvl, 2)) -
                1.6987232790 * (lvl) + 20.8340255487);
            break;
        case 'Superconduct':
            output = (1+((60/9) * (em/(1401+em)))) *
                ((-0.0000006038 * Math.pow(lvl, 5)) +
                (0.0001110078 * Math.pow(lvl, 4)) -
                (0.0064237710 * Math.pow(lvl, 3)) +
                (0.1836799174 * Math.pow(lvl, 2)) -
                0.4750909512 * (lvl) + 7.4972486411);
            break;
        case 'Swirl':
            output = (1+((60/9) * (em/(1401+em)))) *
                ((-0.0000008854 * Math.pow(lvl, 5)) +
                (0.0001679502 * Math.pow(lvl, 4)) -
                (0.0103922088 * Math.pow(lvl, 3)) +
                (0.3097567417 * Math.pow(lvl, 2)) -
                1.7733381829 * (lvl) + 13.5157684329);
            break;
        case 'Shattered':
            output = (1+((60/9) * (em/(1401+em)))) *
                ((-0.0000020555 * Math.pow(lvl, 5)) + 
                (0.0003895953 * Math.pow(lvl, 4)) -
                (0.0239673351 * Math.pow(lvl, 3)) +
                (0.7174530144 * Math.pow(lvl, 2)) -
                3.7397755267*(lvl) + 31.2160750111);
            break;
        case 'Melt':
            output = (1+((0.189266831*em*Math.exp(-0.000505*em))/100));
            break;
        case 'Vaporize':
            output = (1+((0.189266831*em*Math.exp(-0.000505*em))/100));
            break;
        default:
            break;
    }

    return output;
}