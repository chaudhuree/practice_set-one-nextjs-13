export const metadata = {
  title: 'About Traversy Media',
  description: 'it will only show on the about page, its children like team will not show this description or title.we can also declare this metadata in custom layout file that we have in the about page directory.',
};

const AboutPage = () => {
  // throw new Error('This is a test error');
  //if we have error in this page then it will show error page
  //error page has it's own html css. so we can customize it.
  return (
    <div>
      <h1>About Traversy Media</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        molestiae ipsam, et aut consequatur ipsum voluptates quasi, quos
        recusandae doloribus provident consequuntur amet nobis est voluptate
        perferendis quaerat distinctio saepe dolores perspiciatis ex ab nostrum
        eaque! Porro perspiciatis possimus, sed a quidem sunt sit doloremque
        molestiae maiores blanditiis quasi quod.
      </p>
    </div>
  );
};
export default AboutPage;
