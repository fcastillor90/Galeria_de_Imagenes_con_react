import './Header.css';


export const Header=({title}) => {

    //console.log(title);
    return(
        <header>
            <h1> {title} </h1>
        </header>
    );
};

export default Header;