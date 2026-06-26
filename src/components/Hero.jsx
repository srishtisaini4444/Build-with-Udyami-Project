function Hero(props) {
  return (
    <section className="hero">
      <h1>{props.title}</h1>

      <p>{props.subtitle}</p>

      <p className="goal">{props.goal}</p>
    </section>
  );
}

export default Hero;