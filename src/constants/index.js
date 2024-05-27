import { tabArrowDown, astronautHelmet, houseRoof, planet, avocado, bacon } from '@lucide/lab';
import { iconCraftServices, iconKaploom, kaploomLogo, projectLogos, avatar1, avatar2, avatar3, avatar4 } from '../assets';


export const navItems = [
    {
        isMain: true,
        mainTitle: 'Craft CMS',
        cta: 'See our services',
        ctaIcon: tabArrowDown,
        desc: 'We are specialized in Craft CMS.'
    },
    {
        isMain: false,
        mainTitle: '',
        cta: 'Work',
        ctaIcon: astronautHelmet,
        desc: 'We are specialized in Craft CMS.'
    },
    {
        isMain: false,
        mainTitle: '',
        cta: 'About us',
        ctaIcon: houseRoof,
        desc: 'We are specialized in Craft CMS.'
    },
    {
        isMain: false,
        mainTitle: '',
        cta: 'Contact us',
        ctaIcon: planet,
        desc: 'We are specialized in Craft CMS.'
    },
]

export const servicesItems = [
    {
        isCustomIcon: true,
        icon: iconCraftServices,
        title: 'Craft CMS',
        desc: 'We are focused on developing, from start to finish, web solutions with Craft CMS, an easy to use content management system where admins can alter or add content to a website.',
        tagline: {
            small: 'We are experts in',
            large: 'craft cms'
        },
    },
    {
        isCustomIcon: false,
        icon: avocado,
        title: 'Fast Support',
        desc: 'We aim to be as available and supportive as we can to our clients. Feel free to use the form below or contact us directly with questions or requests.',
        tagline: {
            small: 'We are always',
            large: 'happy to help'
        },
    },
    {
        isCustomIcon: true,
        icon: iconKaploom,
        title: 'Custom designs',
        desc: 'Our design team is skilled at customizing existing designs, as well as producing stunning, award-winning brand-new designs.',
        tagline: {
            withImg: true,
            small: 'In partnership with',
            large: kaploomLogo
        },
    },
    {
        isCustomIcon: false,
        icon: bacon,
        title: 'SEO',
        desc: 'Using our expertise along with handy tools we strive for a high SEO score, ensuring higher visibility on search sites such as Google.',
        tagline: {
            small: 'With our SEO knowledge',
            large: 'you will be seen'
        },
    }
]

export const projects = [
    {
        id: '01',
        category: 'featured',
        name: 'kaploom',
        logo: projectLogos[0],
        ctaText: 'Launch Project',
    },
    {
        id: '02',
        category: 'showcase',
        name: 'Go Stolen',
        logo: projectLogos[1],
        ctaText: 'Launch Project',
    },
    {
        id: '03',
        category: 'showcase',
        name: 'Dream Well',
        logo: projectLogos[2],
        ctaText: 'Launch Project',
    },
    {
        id: '04',
        category: 'showcase',
        name: 'Creanntiv',
        logo: projectLogos[3],
        ctaText: 'Launch Project',
    },
    {
        id: '05',
        category: 'showcase',
        name: 'Gjerde',
        logo: projectLogos[4],
        ctaText: 'Launch Project',
    },
]

export const team = [
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar1,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar2,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar3,
    },
    {
        name: '',
        role: '',
        thumbnail: '',
    },
    {
        name: '',
        role: '',
        thumbnail: '',
    },
    {
        name: '',
        role: '',
        thumbnail: '',
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar1,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar2,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar3,
    },
    {
        name: '',
        role: '',
        thumbnail: '',
    },
    {
        name: '',
        role: '',
        thumbnail: '',
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar1,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar2,
    },
    {
        name: 'Jane Doe',
        role: 'Developer',
        thumbnail: avatar3,
    },
]