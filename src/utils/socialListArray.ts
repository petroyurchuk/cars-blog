export type PropsSocialListArray = {
    id: number
    icon: string
    number: string
    description: string
    bgColorOnHover: string
    link: string
}
export const socialListArray: PropsSocialListArray[] = [
    {
        id: 1,
        icon: '/images/Social/social-01.svg',
        number: '22,036',
        description: 'fans',
        bgColorOnHover: '#516eab',
        link: `https://www.facebook.com/TagDiv/`,
    },
    {
        id: 2,
        icon: '/images/Social/social-02.svg',
        number: '3,752',
        description: 'followers',
        bgColorOnHover: '#29c5f6',
        link: `https://twitter.com/tagdivofficial`,
    },
    {
        id: 3,
        icon: '/images/Social/social-03.svg',
        number: '20,700',
        description: 'subscribers',
        bgColorOnHover: '#e14e42',
        link: `https://www.youtube.com/tagdiv`,
    },
]
