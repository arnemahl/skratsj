export default `
:root {
  --violet: #9632fb;
  --pelican-pink: #fb80e6;

  --main-color: #9b00a7;
  --main-color-light: #ac49b3;
  --main-color-dark: #91009c;

  --main-border-color: var(--main-color);
  --secondary-border-color: var(--pelican-pink);

  --light-blue: #498da0;
  --lighter-blue: #c4fff8;
  --lighter-pink: #bf82cb;

  --white: var(--lighter-blue);
  --black: #00336f;

  --white-background: linear-gradient(93deg,
    var(--lighter-blue),
    var(--lighter-pink) 59.0%,
    #a5e4e3 59.1%,
    #79bdc4 66%,
    var(--light-blue)
  );

  --colored-background: linear-gradient(33deg,
    var(--main-color-dark),
    var(--main-color-light)
  );
  --background-color: linear-gradient(256deg, #320035, #320035);
}
`
