import React from 'react';

function Ueberschrift() {
    return (
        <section className="title-hero" role="banner" aria-label="Hero">
            {/* background video - place file in `public/video.mp4` or adjust path */}
            <video className="title-video" autoPlay muted loop playsInline>
                <source src="/Video.mp4" type="video/mp4" />
            </video>

            {/* 50% dark gradient overlay so text is readable */}
            <div className="title-overlay" aria-hidden="true" />

            {/* content on top of the video */}
            <div className="title-content">
                <h1 className="title-main">Willkommen auf meiner Webseite</h1>
                <div className="profile-photo-wrapper">
                    <img src="/foto.jpg" alt="Hakan" className="profile-photo" />
                </div>
                <p className="title-sub">Hi, ich bin Hakan — Digital Product Designer & Webentwickler</p>
            </div>
        </section>
    );
}

export default Ueberschrift;
