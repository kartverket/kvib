import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: (
            <h3 className="heading heading__h3--sm">
                <a href={"/kvib/designsystem/Komponenter"}>Komponenter</a>
            </h3>
        ),
        description: (
            <p className="label label--sml">
                Komponenter vi bruker på både nettsiden og i løsnignene våre.
            </p>
        ),
    },
    {
        title: (
            <h3 className="heading heading__h3--sm">
                <a href={"/kvib/designsystem/designTokens"}>Tokens</a>
            </h3>
        ),
        description: (
            <p className="label label--sml">
                Gjenbrukbare verdier som brukes for å designe sider og komponenter som følger Kartverkets visuelle identitet.
            </p>
        ),
    },
    {
        title: (
            <h3 className="heading heading__h3--sm">
                <a href={"/kvib/designsystems/designTokens/designsystems/designtokens/ikoner"}>Ikoner</a>
            </h3>
        ),
        description: (
            <p className="label label--sml">
                Ikonbibliotek som gir oversikt over alle ikoner vi benytter oss av.
            </p>
        ),
    },
    {
        title: (
            <h3 className="heading heading__h3--sm">
                <a href={"/kvib/designsystems/uu"}>Universell utforming</a>
            </h3>
        ),
        description: (
            <p className="label label--sml">
                Komponenter vi bruker på både nettsiden og i løsnignene våre
            </p>
        ),
    },
    {
        title: (
            <h3 className="heading heading__h3--sm">
                <a href={"#"}>Designmanual<span className="material-symbols-outlined">open_in_new</span></a>
            </h3>
        ),
        description: (
            <p className="label label--sml">
               Trykkmateriell (Kommer snart)
            </p>
        ),
    },
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <div className={styles.features__category}>
                    {title}
                    {description}
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <br/>
            <section className={styles.features__contact}>
                <div className="container">
                    <h1 className="heading heading__h1--m">Ser du noe som mangler?</h1>
                    <p className="heading heading__h2--s">Et designsystem er i kontinuerlig utvikling. <br/> Send oss en mail og bidra med at systemet blir
                        enda bedre!</p>
                    <a href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com?subject=KVIB Feedback"><button className="button button__green--secondary button--sm">Send oss en epost</button></a>
                </div>
            </section>
        </>
    );
}