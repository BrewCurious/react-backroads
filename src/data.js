import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    { id: 1, href: '#home', text: 'home', },
    { id: 2, href: '#about', text: 'about', },
    { id: 3, href: '#services', text: 'services', },
    { id: 4, href: '#tours', text: 'tours', },
];

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook', },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter', },
    { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace', },
];

export const services = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', },
];

export const tours = [
    { id: 1, img: tour1, date: 'august 26th, 2020', title: 'tibet adventure', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'china', duration: '6 days', cost: 'from $2,100', },
    { id: 2, img: tour2, date: 'may 16th, 2020', title: 'best of java', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'indonesia', duration: '11 days', cost: 'from $1,400', },
    { id: 3, img: tour3, date: 'september 4th, 2021', title: 'explore hong kong', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'hong kong', duration: '8 days', cost: 'from $5,000', },
    { id: 4, img: tour4, date: 'june 12th, 2021', title: 'kenya highlights', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country: 'kenya', duration: '20 days', cost: 'from $3,300', },
];