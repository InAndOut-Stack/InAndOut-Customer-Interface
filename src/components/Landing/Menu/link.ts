interface LinkType{
    title: string;
    link: string;
}

const Links: LinkType[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Account",
        link: "/account"
    },
    {
        title: "Documentation",
        link: `url(${"https://github.com/Vldddddd1/InAndOut"})`
    },
    {
        title: "FAQ",
        link: "/faq"
    }
]

export default Links;