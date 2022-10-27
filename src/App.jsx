import { githubIcon, slackIcon } from "./assets";
import LinkCard from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const Links = [
    {
      title: "Twitter Link",
      href: "https://twitter.com/Michaelajayi150",
    },
    {
      title: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      title: "Zuri Books",
      href: "https://books.zuri.team/",
      id: "books",
    },
    {
      title: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=michaelajayi",
      id: "book__python",
    },
    {
      title: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      title: "Design Books",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="pt-12 pb-6">
      <Header />
      <Main Links={Links} />
      <Footer />
    </div>
  );
}

export default App;
