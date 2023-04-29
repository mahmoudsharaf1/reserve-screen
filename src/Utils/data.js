import IMAGES from "../common/images";

const socialIcon = [
    {
        icon: IMAGES.globe
    },
    {
        icon: IMAGES.youtube
    },
    {
        icon: IMAGES.facebook
    },
    {
        icon: IMAGES.instgram
    },
    {
        icon: IMAGES.whatsapp
    },
    {
        icon: IMAGES.twitter
    },
];
const orders = [
    {
        image: IMAGES.order_1,
        orderName: 'Spaghetti With Lobster',
        price: '250',
        currency: 'SAR'
    },
    {
        image: IMAGES.order_2,
        orderName: `Spaghetti All'astice`,
        price: '150',
        currency: 'SAR'
    },
    {
        image: IMAGES.order_3,
        orderName: 'Pizza Al Tartufo',
        price: '100',
        currency: 'SAR'
    },

];
const information = [
    {
        titleInfo: 'Takeaway Available',
        available: true,
    },
    {
        titleInfo: 'Outdoor Seating',
        available: true,
    },
    {
        titleInfo: 'Indoor Seating',
        available: true,
    },
    {
        titleInfo: 'Desserts And Bakes',
        available: true,
    },
    {
        titleInfo: 'No Alcohol Available',
        available: false,
    },
];

const quickReview = [
    {
        review: 'Good Quality'
    },
    {
        review: 'Fresh Food'
    },
    {
        review: 'Excllenet Food'
    },
    {
        review: 'Excllenet Service'
    },
];
const covers = [
    { image: IMAGES.rectangle_1 },
    { image: IMAGES.rectangle_1 },
    { image: IMAGES.rectangle_1 },
]
export { information, orders, socialIcon, quickReview, covers }