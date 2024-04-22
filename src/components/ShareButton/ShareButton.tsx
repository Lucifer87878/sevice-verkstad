interface Link {
    className: string;
    icon: string;
    href: string;
  }
  
  interface Props {
    socialLinks: Link[];
  }
  
  const ShareButton: React.FC<Props> = ({ socialLinks }) => {
    return (
      <div id="page" className="site">
        <div className="share">
          <input type="checkbox" id="sharebutton" />
          <label htmlFor="sharebutton"><i className="ri-share-line"></i></label>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index} className={link.className}>
                <a href={link.href}><i className={link.icon}></i></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ShareButton;
