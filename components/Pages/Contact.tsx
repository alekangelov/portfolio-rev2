import { generateClick } from "@utils";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { contact } from "./style.css";

const contactData = [
  {
    icon: AiFillLinkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alekangelov/",
  },
  {
    icon: AiFillGithub,
    title: "Github",
    url: "https://www.github.com/alekangelov/",
  },
  {
    icon: AiFillTwitterCircle,
    title: "Twitter",
    url: "https://www.twitter.com/goukistrife/",
  },
  {
    icon: AiFillMail,
    title: "Email",
    url: "mailto:alekangelov@icloud.com",
  },
];

export const Contact = () => {
  return (
    <div className={contact.container}>
      <Grid gap="md" wrap>
        <Grid.Item size="12">
          <Grid>
            <Grid.Item size="12" tabletSize="6" desktopSize="4">
              <div>
                <p className={contact.text}>
                  I usually try to respond everywhere in a timely manner. Links
                  and stuff are hidden on purpose. One reason is that I really
                  don't want people to find them out unless they click. The
                  other reason is that there's an off chance they could be
                  scraped.
                </p>
              </div>
            </Grid.Item>
          </Grid>
        </Grid.Item>
        {contactData.map((e) => (
          <Grid.Item>
            <button onClick={generateClick(e.url)} className={contact.button}>
              <e.icon size={24} />
              <span>{e.title}</span>
            </button>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
};
