import Image from "next/image";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={`container h-auto w-auto flex items-center justify-center`}>
      <div className={`flex flex-col w-1/2 m-20`}>
        <h1
          className={`text-green-500 font-bold text-center ${style.biscuits__text}`}
        >
          Biscuits Industrial
        </h1>
        <p className={`text-center mb-5 text-2xl`}>
          Eve Online, Spreadsheets in Space
        </p>
        <h1 className={`text-green-500 font-bold text-4xl mb-4`}>Welcome</h1>
        <p>
          Welcome to my website! It’s currently being developed so please, don’t
          hate it too much. I’m a very new coder (haven’t made a website in
          about six years or so) and I have forgotten it all. This is a
          refresher for me! If you wish to give me a hand, that would be
          awesome! :D
        </p>
        The only thing that is working is in the Navbar for Frigate Class,
        nothing else works right now. Warning! This website is in Dev mode so
        LITTLE progress will be given. It’s being made by someone with barely
        any knowledge of HTML, PHP, and Java. Thanks to Mike for helping me get
        this started!
        <br />
        <br />
        <p>
          If you wish to help, you can help with pointers by mailing any of the
          toons left and right, or send isk to 'I like biscuits' on the right
          side. Donations are appreciated and let me know who is interested
          (it’s classified unless you tell me in the donation you want to be
          known).
        </p>
        <br />
        <p>
          I have also created a Patreon for anyone that wishes to assist on
          building the website, or if it has helped you out in any way!
        </p>
        <br />
        <p>
          <a
            href="https://www.patreon.com/bePatron?u=178136"
            data-patreon-widget-type="become-patron-button"
            className={`text-green-500 font-bold underline text-xl`}
          >
            Become a Patron!
          </a>
        </p>
        <br />
        <p>
          If you wish not to send real money, feel free to send Isk as a
          donation with a description “Biscuits Industry” and hopefully I can
          get you a cool icon on the website for future use.
        </p>
      </div>
      <div>
        <Image
          src="https://images.evetech.net/characters/95046472/portrait"
          width={400}
          height={400}
          alt="I like biscuits"
          className={`rounded-xl border-green-500 border-solid border-2`}
        />
      </div>
    </div>
  );
}
