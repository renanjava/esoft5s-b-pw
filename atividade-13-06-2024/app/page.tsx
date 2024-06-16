import React from "react";
import './styles.css'

function Header(props: any) {
  return (
    React.createElement(
      'header',
      { className: 'headerSquirtle' },
      <h1>{props.title}</h1>
    )
  );
}

function CardSection(props: any) {
  return (
    React.createElement(
      'section',
      { className: 'sectionSquirtle' },
      <h1>{props.teste}</h1>
    )
  );
}

export default function Home() {
  return (
    <body>
      <Header title={"Squirtle"} />

      <main>
        <CardSection teste={"oi"} />
      </main>
    </body>
  );
}
