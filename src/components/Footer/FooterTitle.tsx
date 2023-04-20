type Props = {
    children: React.ReactNode
}
const FooterTitle = ({ children }: Props) => {
    return <h4 className="footer-title">{children}</h4>
}
export default FooterTitle
