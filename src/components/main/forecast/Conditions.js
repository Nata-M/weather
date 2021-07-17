import cloudyDay from './animated/cloudy-day-3.svg';
import cloudyNight from './animated/cloudy-night-3.svg';
import night from './animated/night.svg';
import clouds from './animated/cloudy.svg';
import thunder from './animated/thunder.svg';
import sunny from './animated/day.svg';
import snowy from './animated/snowy-5.svg';
import rainy from './animated/rainy-5.svg';
import lightRain from './animated/rainy-2.svg';

export default function conditions(img) {
    switch (img) {
        case '01d': img = sunny;
            break;
        case '01n': img = night;
            break;
        case '02d': img = cloudyDay;
            break;
        case '02n': case '03n': case '04n': case '09n': case '10n': case '13n': case '50n': img = cloudyNight;
            break;
        case '03d': img = cloudyDay;
            break;
        case '04d': img = clouds;
            break;
        case '50d': img = clouds;
            break;
        case '13d': img = snowy;
            break;
        case '10d': img = lightRain;
            break;
        case '09d': img = rainy;
            break;
        case '11d': img = thunder;
            break;
    }
    return img
}