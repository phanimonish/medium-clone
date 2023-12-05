const posts = [
  {
    id: 1, 
    title: "The story of Dhoni being made India captain for 2007 World T20",
    img: "https://ss-i.thgim.com/public/incoming/article38506707.ece/alternates/FREE_1200/image-1jpg",
    para: "India's win in the inaugural World T20 in 2007, where it beat archrival Pakistan in the final, led to the emergence of the Indian Premier League, which gave a huge fillip to Indian cricket. Former BCCI Board of Control for Cricket in India president and Chennai Super Kings CSK owner N. Srinivasan on Tuesday revealed how Mahendra Singh Dhoni was appointed the captain of the Indian team ahead of the inaugural men World T20 in 2007. The IPL Indian Premier League was going to be announced. The Indian team was leaving for South Africa for the World T20. Rahul Dravid wanted to resign as captain. He had returned from England, Srinivasan, the then BCCI treasurer, said during Sportstars South Sports Conclave in Chennai on Tuesday. revealed how Mahendra Singh Dhoni was appointed the captain of the Indian team ahead of the inaugural mens World T20 in 2007. The IPL Indian Premier League was going to be announced. The Indian team was leaving for South Africa for the World T20. Rahul Dravid wanted to resign as captain. He had returned from England, Srinivasan, the then BCCI treasurer, said during Sportstars South Sports Conclave in Chennai on Tuesday.",
  },
  {
    id: 2,
    title: "What Is JavaScript Used For?",
    img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto",
    para: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. JavaScript is known for being a naturally very fast programming language that speeds up websites and applications. It enables developers to carry out maintenance and upgrades easily and it makes the debugging process simple. The fact that it can be used alongside other programming languages makes it a catch-all choice for front-end web development. JavaScript is commonly used to make web pages dynamic. As a client scripting language, it provides websites with interactivity like prompts and alerts and it can add animations to images and text. JS is used by websites for the purposes of data validation to ensure that users enter the correct information into fields on contact and sign-up forms.",
  },
  {
    id: 3,
    title: "The 2023 ReactJS Roadmap for the Developers | Zero to Hero",
    img: "https://miro.medium.com/v2/resize:fit:680/1*RDN058L5gQ02Xy13OaxjnQ.jpeg",
    para: "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page. React components are JavaScript functions that return markup This article contains a lot of links, but believe me, after reading them you’ll get started with React JS right away. If reading is not what you looking for, add the Natural Reader Text to Speech extension to your chrome and make your life easy. No matter, which framework or library you learn for web development, you must know the basics and when I say basics, I mean HTML, CSS, and JavaScript, these three are three pillars of web development. In order to be a React Developer Pro, you need to have a basic understanding of Javascript.",
  },
  {
    id: 4,
    title: "How is the Demand for Web Development in the Future?",
    img: "https://media.licdn.com/dms/image/D4D12AQGXjzbAJKAgOw/article-cover_image-shrink_720_1280/0/1680499811064?e=1707350400&v=beta&t=DNLhYq6kG_eg1eUyIks44u_Wfd1S0y-HzKamY9YQxZU",
    para: "The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML. Web development is a multifaceted discipline that encompasses the creation, design, and maintenance of websites and web applications. It involves the use of various programming languages, frameworks, and tools to build interactive, visually appealing, and user-friendly digital experiences. Web development has two immediate dimensions: front-end (or client-side) development and back-end (or server-side) development. Front-end development focuses on the visual aspects and user interaction elements of a website or web application. Back-end development, on the other hand, deals with server-side logic, data storage, and integration with various services and APIs. Web development is a dynamic and ever-evolving field, with new technologies, frameworks, and best practices constantly emerging. As a result, web developers must continually update their skills and adapt to the changing landscape of the digital world. ",
  },
];
const followingPosts = [
  {
    id: 1, 
    title: "The story of Dhoni being made India captain for 2007 World T20",
    img: "https://ss-i.thgim.com/public/incoming/article38506707.ece/alternates/FREE_1200/image-1jpg",
    para: "India's win in the inaugural World T20 in 2007, where it beat archrival Pakistan in the final, led to the emergence of the Indian Premier League, which gave a huge fillip to Indian cricket. Former BCCI Board of Control for Cricket in India president and Chennai Super Kings CSK owner N. Srinivasan on Tuesday revealed how Mahendra Singh Dhoni was appointed the captain of the Indian team ahead of the inaugural men World T20 in 2007. The IPL Indian Premier League was going to be announced. The Indian team was leaving for South Africa for the World T20. Rahul Dravid wanted to resign as captain. He had returned from England, Srinivasan, the then BCCI treasurer, said during Sportstars South Sports Conclave in Chennai on Tuesday. revealed how Mahendra Singh Dhoni was appointed the captain of the Indian team ahead of the inaugural mens World T20 in 2007. The IPL Indian Premier League was going to be announced. The Indian team was leaving for South Africa for the World T20. Rahul Dravid wanted to resign as captain. He had returned from England, Srinivasan, the then BCCI treasurer, said during Sportstars South Sports Conclave in Chennai on Tuesday.",
  },
];
const webdevelopmentPosts = [
  {
    id: 4,
    title: "How is the Demand for Web Development in the Future?",
    img: "https://media.licdn.com/dms/image/D4D12AQGXjzbAJKAgOw/article-cover_image-shrink_720_1280/0/1680499811064?e=1707350400&v=beta&t=DNLhYq6kG_eg1eUyIks44u_Wfd1S0y-HzKamY9YQxZU",
    para: "The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML. Web development is a multifaceted discipline that encompasses the creation, design, and maintenance of websites and web applications. It involves the use of various programming languages, frameworks, and tools to build interactive, visually appealing, and user-friendly digital experiences. Web development has two immediate dimensions: front-end (or client-side) development and back-end (or server-side) development. Front-end development focuses on the visual aspects and user interaction elements of a website or web application. Back-end development, on the other hand, deals with server-side logic, data storage, and integration with various services and APIs. Web development is a dynamic and ever-evolving field, with new technologies, frameworks, and best practices constantly emerging. As a result, web developers must continually update their skills and adapt to the changing landscape of the digital world. ",
  },
];
const reactPosts = [
  {
    id: 3,
    title: "The 2023 ReactJS Roadmap for the Developers | Zero to Hero",
    img: "https://miro.medium.com/v2/resize:fit:680/1*RDN058L5gQ02Xy13OaxjnQ.jpeg",
    para: "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page. React components are JavaScript functions that return markup This article contains a lot of links, but believe me, after reading them you’ll get started with React JS right away. If reading is not what you looking for, add the Natural Reader Text to Speech extension to your chrome and make your life easy. No matter, which framework or library you learn for web development, you must know the basics and when I say basics, I mean HTML, CSS, and JavaScript, these three are three pillars of web development. In order to be a React Developer Pro, you need to have a basic understanding of Javascript.",
  },
];
const jsPosts = [
  {
    id: 2,
    title: "What Is JavaScript Used For?",
    img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto",
    para: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. JavaScript is known for being a naturally very fast programming language that speeds up websites and applications. It enables developers to carry out maintenance and upgrades easily and it makes the debugging process simple. The fact that it can be used alongside other programming languages makes it a catch-all choice for front-end web development. JavaScript is commonly used to make web pages dynamic. As a client scripting language, it provides websites with interactivity like prompts and alerts and it can add animations to images and text. JS is used by websites for the purposes of data validation to ensure that users enter the correct information into fields on contact and sign-up forms.",
  },
];

export { posts, webdevelopmentPosts, followingPosts, reactPosts, jsPosts};
