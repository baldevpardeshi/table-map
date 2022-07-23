const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center gap-5">
        <p>Total Results: 250</p>
        <div className="flex items-center gap-2">
          <span>Page</span>
          <input type="numver" value="10" className="w-9 text-center" />
          <span>of 50</span>
          <div className="flex items-center gap-1">
            <button className="footer__pagination-button">&lt;</button>
            <button className="footer__pagination-button">&gt;</button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="button-primary">Cancle</button>
        <button className="button-success">Ok</button>
      </div>
    </footer>
  );
};
export default Footer;