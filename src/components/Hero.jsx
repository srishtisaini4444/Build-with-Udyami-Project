function Hero(props) {
  return (
    <section>
      <h1>{props.title}</h1>

      <p>{props.subtitle}</p>
      <h3>{props.goal}</h3>
    </section>
  );
}

export default Hero;