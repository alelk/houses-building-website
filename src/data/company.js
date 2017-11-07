/**
 * Data file
 *
 * Created by Alex Elkin on 18.10.2017.
 */
import imgBathhouse from './services-bathhouse.jpeg'
import imgFoundation from './services-foundation.jpg'
import imgHouses from './services-houses.jpeg'
import imgPavilion from './services-pavilion.jpg'
import imgRoof from './services-roof.jpeg'
import imgSiding from './services-siding.jpg'

export const contacts = {
    phoneNumber : '+7(950)614-45-09',
    companyName : 'Строительная бригада',
    companyLocation : 'г. Павлово'
};

export const statistics = [
    {
        topLabel:"более",
        valueLabel:"15 лет",
        iconName:"checked calendar",
        bottomLabel:"успешной работы",
        color:"orange"
    }, {
        topLabel:"более",
        valueLabel:"80 объектов",
        iconName:"home",
        bottomLabel:"успешно завершены",
        color:"teal"
    }, {
        topLabel:"гарантируем высокое",
        valueLabel:"качество",
        iconName:"thumbs up",
        bottomLabel:"работы",
        color:"violet"
    }, {
        topLabel:"предлагаем",
        valueLabel:"выгодные",
        iconName:"money",
        bottomLabel:"цены",
        color:"brown"
    }, {
        topLabel:"мы",
        valueLabel:"быстро",
        iconName:"wait",
        bottomLabel:"выполняем работу",
        color:"red"
    }, {
        topLabel:"рассчитаем",
        valueLabel:"бесплатно",
        iconName:"heart",
        bottomLabel:"стоимость строительства",
        color:"purple"
    },
];

export const services = [
    {label:"Постройка каркасных домов", img:imgHouses},
    {label:"Постройка беседок", img:imgPavilion},
    {label:"Постройка бань", img:imgBathhouse},
    {label:"Обшивка сайдингом", img: imgSiding},
    {label:"Заливка фундамента", img: imgFoundation},
    {label:"Кровельные работы", img: imgRoof},
];