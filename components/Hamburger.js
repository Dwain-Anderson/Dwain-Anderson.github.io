const Hamburger = ({ toggleMenu }) => {
    return (
        <button id="hamburger-button" onClick={toggleMenu} className="hidden">
            <img src="/assets/Hamburger_Icon.png" alt="Menu" height="60" width="60" />
        </button>
    );
};

export default Hamburger;
