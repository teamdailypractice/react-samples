import React from 'react';

function Navigation() {
    return (
        <>
            <nav className="menu" id="main-menu">
                <button className="menu-toggle" id="toggle-menu">
                    toggle menu
                </button>
                <div className="menu-dropdown">
                    <ul className="nav-menu">
                        <li><a className="current" href="#">வாழ்க்கை</a></li>
                        <li><a href="body.html">உடல்</a></li>
                        <li><a href="mind.html">மனம்</a></li>
                        <li><a href="senses.html">ஐம்புலன்கள்</a></li>
                        <li><a href="words.html">சொற்கள்</a></li>
                        <li><a href="action.html">செயல்</a></li>
                        <li><a href="association.html">சுற்றமும்-நட்பும்</a></li>
                        <li><a href="reflection.html">தன்னை அறிதல் - ஆராய்தல் - தெளிதல்</a></li>
                        <li><a href="instablity.html">நிலையாமை</a></li>
                        <li><a href="let-go.html">விடுவதற்கு கற்றுக் கொள்ளுதல்</a></li>
                        <li><a href="body-nobody.html">பிறப்பு இறப்பு</a></li>
                        <li><a
                            href="../index.html?942,944,943,947,34,595,35,27,126,24,6,100,129,198,181,661,611,666,675,454,455,339,310,792">திருக்குறள்</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navigation;