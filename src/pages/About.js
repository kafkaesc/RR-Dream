function About() {
  return (
    <div className="content-column">
      <h2>About</h2>
      <p>About this project.</p>
      <p>
        The full code for this site can be viewed on{" "}
        <a
          href="https://github.com/kafkaesc/RR-Dream"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <p className="text-center">Built by Jared Hettinger</p>
      <ul className="social-links">
        <li>
          <a
            href="https://www.github.com/kafkaesc"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="GitHub"
              src={require("assets/images/social/github.png")}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/_kafkaesc"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Twitter"
              src={require("assets/images/social/twitter.png")}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kafkaesc"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Instagram"
              src={require("assets/images/social/instagram.png")}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
